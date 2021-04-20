import { createClient } from '@supabase/supabase-js'

export default {
  install: (app, params) => {
    const { url, key, options = {} } = params
    console.log(url, key, options)
    const supabase = createClient(url, key, options)

    app.config.globalProperties.$supabase = supabase
    app.provide('supabase', supabase)
  },
}
