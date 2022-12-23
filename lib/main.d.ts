import { IVueSupabase } from "./@types/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $supabase: IVueSupabase;
  }
}

