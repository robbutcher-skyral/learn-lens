import type { BasePluginConfig } from "@adk/lens-react";

/** Replace: add or change map UI positions to match your plugin's overlay layout. */
export interface DashboardMapUIConfig {
  summary: [number, number];
}

/** Replace: adjust banner options if needed. */
export interface DashboardBannerConfig {
  position: "above" | "below";
  collapsible: boolean;
}

/** Replace: add any plugin-specific config fields your plugin needs. */
export interface DashboardPluginConfig extends BasePluginConfig {
  color?: string;
  mapUI: DashboardMapUIConfig;
  banner: DashboardBannerConfig;
  /** When set, the plugin's Redux slice is registered at this store key. Omit to skip registering a slice. */
  sliceKey: string;
}
