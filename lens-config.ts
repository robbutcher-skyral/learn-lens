import {
  FeaturesConfig,
  MapConfig,
  ReactConfig,
  getLensEnvVar,
} from "@adk/lens-react";

import pluginA from "./src/plugins/plugin-a-plugin";

const REACT_CONFIG = {
  LOGO: getLensEnvVar("LOGO", ""),
  TITLE: getLensEnvVar("TITLE", "learn-lens"),
  DEBUG: true,
} satisfies ReactConfig;

const MAP_CONFIG = {
  TILE_SOURCE_NAME: getLensEnvVar("TILE_SOURCE_NAME", "Testing"),
  DEFAULT_POSITION: {
    center: ["-3.0", "54.5"],
    zoom: "5.5",
  },
  BASEMAPS: ["osm-positron"],
} satisfies MapConfig;

const FEATURES = [
  {
    id: "pluginA",
    name: "PluginA",
    routePrefix: "/feature",
    plugins: [
      pluginA({
        name: "Feature",
        version: "1.0.0",
        color: "#1976d2",
        mapUI: { summary: [0, 0] },
        banner: { position: "above", collapsible: true },
        sliceKey: "pluginAState",
      }),
    ],
  },
] satisfies FeaturesConfig;

export default {
  REACT_CONFIG,
  MAP_CONFIG,
  FEATURES,
};
