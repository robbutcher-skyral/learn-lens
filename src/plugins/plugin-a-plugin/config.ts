import type { BasePluginConfig } from "@adk/lens-react";

/** Replace: add or change map UI positions to match your plugin's overlay layout. */
export interface PluginAMapUIConfig {
  summary: [number, number];
}

/** Replace: adjust banner options if needed. */
export interface PluginABannerConfig {
  position: "above" | "below";
  collapsible: boolean;
}

/** Replace: add any plugin-specific config fields your plugin needs. */
export interface PluginAPluginConfig extends BasePluginConfig {
  color?: string;
  mapUI: PluginAMapUIConfig;
  banner: PluginABannerConfig;
  /** When set, the plugin's Redux slice is registered at this store key. Omit to skip registering a slice. */
  sliceKey: string;
}
