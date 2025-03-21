// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Mock supabase client with dummy data
export const supabase = {
  from: () => ({
    select: () => ({
      order: () => ({ data: [], error: null }),
    }),
  }),
}

