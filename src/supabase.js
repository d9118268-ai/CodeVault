import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kierjtfdiyuhchvdukzk.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZXJqdGZkaXl1aGNodmR1a3prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODkyMjMsImV4cCI6MjA5MjI2NTIyM30.f-0qWc1uiRsxXJowCkL3SL9TPUaezQIEb3rleZPtlWM"

export const supabase = createClient(supabaseUrl, supabaseKey)