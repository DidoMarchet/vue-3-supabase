import type { IVueSupabase } from "./@types";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $supabase: IVueSupabase;
  }
}
