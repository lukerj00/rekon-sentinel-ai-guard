// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import Mailgun from "mailgun";

// Environment variables (set in Supabase dashboard or CLI)
const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN");
const CONTACT_EMAIL = "info@airekon.com";

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, company, message, inquiry_type } = body;
  if (!name || !email || !message || !inquiry_type) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    return new Response(JSON.stringify({ error: "Mailgun not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Setup Mailgun client
  const mg = new Mailgun({
    username: "api",
    key: MAILGUN_API_KEY,
  });

  const subject = `New Contact Form Submission: ${inquiry_type}`;
  const text = `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nInquiry Type: ${inquiry_type}\nMessage:\n${message}`;

  try {
    const result = await mg.messages.create(MAILGUN_DOMAIN, {
      from: `AI Rekon Contact <no-reply@${MAILGUN_DOMAIN}>`,
      to: [CONTACT_EMAIL],
      subject,
      text,
    });
    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
