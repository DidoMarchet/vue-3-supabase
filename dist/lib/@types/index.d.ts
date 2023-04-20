import { App } from "vue";
import type { SupabaseClientOptions } from "@supabase/supabase-js";
export interface Params {
    supabaseUrl: string;
    supabaseKey: string;
    options?: SupabaseClientOptions<'public'>;
}
export interface IVueSupabase {
    install(app: App, params: Params): void;
}
