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

import type { DashboardPluginConfig } from "./config";
import { PLUGIN_ID } from "./constants";
import { DashboardOverview } from "./routes";

export { PLUGIN_ID } from "./constants";

export type DashboardPluginInstance = BasePluginInstance;

const overview = createRouteRef<StaticRouteRef>("DashboardPlugin", "overview");

export const routes = { overview };

const dashboardPlugin: PluginFactory<DashboardPluginConfig> = (config: DashboardPluginConfig): DashboardPluginInstance => {
  routeManager.registerRoute(overview, {
    path: "/dashboard",
    component: DashboardOverview,
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

export default definePlugin(dashboardPlugin);

export type { DashboardPluginConfig } from "./config";
