-- This script creates a trigger to send an email when a new contact submission is created.

-- 1. Ensure the pg_net extension is enabled for making HTTP requests.
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- 2. Create the trigger function.
CREATE OR REPLACE FUNCTION public.handle_new_contact_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER -- Must be run as a security definer to access pg_net.
-- Set a search path to prevent hijacking.
SET search_path = public, extensions;
AS $$
BEGIN
  -- Perform the HTTP request to the send-contact-email Edge Function
  -- Note: For production, you must replace the placeholder URL with your actual Supabase Function URL.
  PERFORM net.http_post(
    -- For local development, the URL is usually http://127.0.0.1:54321/functions/v1/send-contact-email
    -- For production, it should be https://<YOUR-PROJECT-REF>.supabase.co/functions/v1/send-contact-email
    url := 'https://vbrtwqzwoxmgdligujju.supabase.co/functions/v1/send-contact-email',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'company', NEW.company,
      'message', NEW.message,
      'inquiry_type', NEW.inquiry_type
    )::jsonb
  );
  RETURN NEW;
END;
$$;

-- 3. Create the trigger that executes the function on each new row.
CREATE TRIGGER on_new_contact_submission_send_email
AFTER INSERT ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_contact_submission();
