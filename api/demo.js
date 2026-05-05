/*
 * Vercel serverless function for the Book-a-Demo form.
 *
 * Lives at /api/demo at project root (not under src/pages/api) because
 * astro.config.mjs sets `output: 'static'`. Vercel picks up /api/*.js as
 * Node serverless functions independently of any framework.
 *
 * Accepts application/x-www-form-urlencoded (no-JS form post) and JSON.
 * Posts to Resend's REST API to email the team. RESEND_API_KEY and
 * DEMO_FORM_TO must be set as Vercel env vars.
 *
 * Honeypot: any value in the `website` field marks the request as spam and
 * silently 200s — bots don't get to learn the difference.
 */

const TO = process.env.DEMO_FORM_TO || "hello@fasttrackr.ai";
const FROM = process.env.DEMO_FORM_FROM || "FastTrackr Demo <noreply@fasttrackr.ai>";

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  const ct = (req.headers["content-type"] || "").toLowerCase();
  if (ct.includes("application/json")) {
    try { return JSON.parse(raw || "{}"); } catch { return {}; }
  }
  if (ct.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(raw));
  }
  return {};
}

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clientWantsJson(req) {
  const accept = (req.headers.accept || "").toLowerCase();
  return accept.includes("application/json");
}

function redirect(res, location) {
  res.statusCode = 303;
  res.setHeader("Location", location);
  res.end();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  const body = await readBody(req);

  // Honeypot — silently succeed if filled.
  if (body.website && String(body.website).trim() !== "") {
    if (clientWantsJson(req)) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: true }));
    } else {
      redirect(res, "/contact?status=success");
    }
    return;
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const firm = String(body.firm || "").trim();
  const role = String(body.role || "").trim();
  const message = String(body.message || "").trim();
  const preferredTimes = String(body.preferredTimes || "").trim();

  const errors = [];
  if (!name) errors.push("name");
  if (!isEmail(email)) errors.push("email");

  if (errors.length) {
    if (clientWantsJson(req)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, fields: errors }));
    } else {
      redirect(res, "/contact?status=error&fields=" + encodeURIComponent(errors.join(",")));
    }
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Don't leak missing-config to the user; log and 500.
    console.error("[/api/demo] RESEND_API_KEY not set");
    if (clientWantsJson(req)) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false }));
    } else {
      redirect(res, "/contact?status=error");
    }
    return;
  }

  const subject = `Demo request: ${name}${firm ? ` (${firm})` : ""}`;
  const html = `
    <h2>New Book-a-Demo request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Firm:</strong> ${escapeHtml(firm) || "&mdash;"}</p>
    <p><strong>Role:</strong> ${escapeHtml(role) || "&mdash;"}</p>
    <p><strong>Preferred times:</strong> ${escapeHtml(preferredTimes) || "&mdash;"}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message) || "&mdash;"}</pre>
  `;
  const text =
    `New Book-a-Demo request\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Firm: ${firm || "-"}\n` +
    `Role: ${role || "-"}\n` +
    `Preferred times: ${preferredTimes || "-"}\n` +
    `Message:\n${message || "-"}\n`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("[/api/demo] resend error", resp.status, errBody);
      if (clientWantsJson(req)) {
        res.statusCode = 502;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: false }));
      } else {
        redirect(res, "/contact?status=error");
      }
      return;
    }
  } catch (err) {
    console.error("[/api/demo] resend fetch failed", err);
    if (clientWantsJson(req)) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false }));
    } else {
      redirect(res, "/contact?status=error");
    }
    return;
  }

  if (clientWantsJson(req)) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true }));
  } else {
    redirect(res, "/contact?status=success");
  }
}
