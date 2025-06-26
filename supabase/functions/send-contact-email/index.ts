// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { corsHeaders } from "../_shared/cors.ts"

// Environment variables (set in Supabase dashboard or CLI)
const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN");
const MAILGUN_API_BASE_URL = Deno.env.get("MAILGUN_API_BASE_URL") || "https://api.mailgun.net"; // Default to US
const CONTACT_EMAIL = "info@airekon.com";

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log("Function handler started for request:", req.method);

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    let body;
    try {
      console.log("Attempting to parse JSON body...");
      body = await req.json();
      console.log("Request body parsed successfully.");
    } catch (_e) {
      console.error("Failed to parse JSON body.");
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Checking for required fields in body.");
    const { name, email, company, message, inquiry_type } = body;
    if (!name || !email || !message || !inquiry_type) {
      console.error("Missing required fields:", body);
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    console.log("All required fields are present.");


    console.log("Checking for Mailgun environment variables.");
    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error("Mailgun environment variables are not configured.");
      return new Response(JSON.stringify({ error: "Mailgun not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    console.log("Mailgun environment variables are present.");


    const subject = `New Contact Form Submission: ${inquiry_type}`;
    const text = `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nInquiry Type: ${inquiry_type}\nMessage:\n${message}`;

    const formData = new URLSearchParams();
    formData.append('from', `AI Rekon Contact <no-reply@${MAILGUN_DOMAIN}>`);
    formData.append('to', CONTACT_EMAIL);
    formData.append('subject', subject);
    formData.append('text', text);

    console.log("Attempting to send email via Mailgun API.");
    const response = await fetch(`${MAILGUN_API_BASE_URL}/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`
      },
      body: formData
    });

    console.log(`Mailgun API response status: ${response.status}`);
    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Mailgun API error:", errorBody);
      throw new Error(`Failed to send email: ${errorBody}`);
    }

    const result = await response.json();
    console.log("Email sent successfully via Mailgun. ID:", result.id);

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Critical error in function handler:", error);
    const message = error instanceof Error ? error.message : "Failed to send email";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
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
