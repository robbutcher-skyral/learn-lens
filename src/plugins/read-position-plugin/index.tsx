/**
 * Dashboard/routes plugin — registers routes, no map layers.
 */
import {
  createRouteRef,
  routeManager,
  definePlugin,
  type BasePluginInstance,
  type PluginFactory,
  type StaticRouteRef,
} from "@adk/lens-react";

import type { ReadPositionPluginConfig } from "./config";
import { PLUGIN_ID } from "./constants";
import { ReadPositionOverview } from "./routes";

export { PLUGIN_ID } from "./constants";

export type ReadPositionPluginInstance = BasePluginInstance;

const overview = createRouteRef<StaticRouteRef>("ReadPositionPlugin", "overview");

export const routes = { overview };

const readPositionPlugin: PluginFactory<ReadPositionPluginConfig> = (config: ReadPositionPluginConfig): ReadPositionPluginInstance => {
  routeManager.registerRoute(overview, {
    path: "/readPosition",
    component: ReadPositionOverview,
    navbar: { label: config.name },
  });

  return {
    id: PLUGIN_ID,
    layers: [],
    routes: [overview.path],
    destroy() {
      routeManager.removeRoute(overview.path);
    },
  };
};

export default definePlugin(readPositionPlugin);

export type { ReadPositionPluginConfig } from "./config";
