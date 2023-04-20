import type { IVueSupabase } from "./@types";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $supabase: IVueSupabase;
  }
}

export function useSupabase(): IVueSupabase;

declare const supabasePlugin: IVueSupabase;
export default supabasePlugin;
