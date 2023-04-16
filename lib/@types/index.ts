import { App } from "vue";
export interface Params {
  supabaseUrl: string;
  supabaseKey: string;
  options?: never;
}

export interface IVueSupabase {
  install(app: App, params: Params): void;
}
