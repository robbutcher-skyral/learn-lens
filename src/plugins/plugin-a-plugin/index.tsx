/**
 * Replace: add or remove routes, layers, map UIs, and banner in the factory as needed.
 */
import type { FC } from "react";
import {
  createRouteRef,
  layerManager,
  lensManager,
  mapManager,
  routeManager,
  definePlugin,
  type BasePluginInstance,
  type PluginFactory,
  type StaticRouteRef,
} from "@adk/lens-react";

import type { PluginAPluginConfig } from "./config";
import { SummaryCard, PluginAAboveMapBanner } from "./components";
import { PLUGIN_ID, LAYER_IDS } from "./constants";
import { createPluginASlice } from "./redux/pluginASlice";
import { PluginAOverview } from "./routes";
import { Layer } from "./components/Layer";

export { PLUGIN_ID, LAYER_IDS } from "./constants";

export type PluginAPluginInstance = BasePluginInstance;

const overview = createRouteRef<StaticRouteRef>("PluginAPlugin", "overview");

export const routes = { overview };

const pluginAPlugin: PluginFactory<PluginAPluginConfig> = (config: PluginAPluginConfig): PluginAPluginInstance => {
  const { mapUI, banner, sliceKey } = config;

  const slice = createPluginASlice(sliceKey);
  lensManager.store.addSlice(sliceKey, slice.reducer);

  const Banner: FC = () => <PluginAAboveMapBanner />;

  routeManager.registerRoute(overview, {
    path: "/plugin",
    component: PluginAOverview,
    navbar: { label: config.name },
  });

  layerManager.addLayer(LAYER_IDS.MAIN, true, {
    title: config.name,
    group: "PluginA",
    color: config.color ?? "#1976d2",
    description: "Main layer",
  });

  const summaryId = mapManager.addMapUI(SummaryCard, {
    id: "pluginA-summary",
    position: mapUI.summary,
    size: [4, 2],
  });
  const bannerId = mapManager.addMapSibling(Banner, {
    position: banner.position,
    id: "pluginA-banner",
    collapsible: banner.collapsible,
  });

  return {
    id: PLUGIN_ID,
    layers: [Layer],
    routes: [overview.path],
    destroy() {
      routeManager.removeRoute(overview.path);
      layerManager.removeLayer(LAYER_IDS.MAIN);
      mapManager.removeMapUI(summaryId);
      mapManager.removeMapSibling(bannerId);
      lensManager.store.removeSlice(sliceKey)
    },
  };
};

export default definePlugin(pluginAPlugin);

export type { PluginAPluginConfig } from "./config";
