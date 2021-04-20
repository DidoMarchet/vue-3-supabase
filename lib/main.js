import { createClient } from '@supabase/supabase-js'

export default {
  install: (app, params) => {
    const { supabaseUrl, supabaseKey, options = {} } = params
    const supabase = createClient(supabaseUrl, supabaseKey, options)

    app.config.globalProperties.$supabase = supabase
    app.provide('supabase', supabase)
  },
}
