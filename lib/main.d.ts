import type { IVueSupabase } from "./@types";
import type { SupabaseClient } from "@supabase/supabase-js";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $supabase: IVueSupabase;
  }
}

export function useSupabase(): SupabaseClient;

declare const supabasePlugin: IVueSupabase;
export default supabasePlugin;
