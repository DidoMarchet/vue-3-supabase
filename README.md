# Vue 3 Supabase.js

:hamburger: Simple [Vue 3](https://github.com/vuejs/docs-next) wrap for [Supabase.js Client](https://supabase.io/docs/reference/javascript/supabase-client) build with [Vitejs](https://github.com/vitejs/vite)

### Table of content:
- [Use plugin](#use-plugin)


Install the package via npm:

``` bash
npm i vue-3-supabase
```

# Use plugin

It's Simple! In your `main.js` file import the plugin and use it.

It takes three params as argument :

`supabaseUrl`: the unique **required** Supabase URL which is supplied when you create a new project in your project dashboard.

`supabaseKey`: the unique **required** Supabase Key which is supplied when you create a new project in your project dashboard.

`options`: additional parameters **not required**

``` javascript
import { createApp } from 'vue'
import App from './App.vue'
// Import supabase
import supabase from 'vue-3-supabase'

const app = createApp(App)

// Use supabase
app.use(supabase, {
  supabaseUrl: 'https://xxxxxxxxxxxxxxxxx.supabase.co', // actually you can use something like import.meta.env.VITE_SUPABASE_URL
  supabaseKey: 'xxxxx__xxxxx___xxxxx___xxxxx', // actually you can use sompething like import.meta.env.VITE_SUPABASE_KEY,
  options: {}
})

app.mount('#app')
```


