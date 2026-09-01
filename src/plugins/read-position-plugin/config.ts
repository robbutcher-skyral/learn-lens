import type { BasePluginConfig } from "@adk/lens-react";

/** Replace: add any plugin-specific config fields your plugin needs. */
export interface ReadPositionPluginConfig extends BasePluginConfig {
  /** When set, the plugin's Redux slice is registered at this store key. Omit to skip registering a slice. */
  sliceKey: string;
}
