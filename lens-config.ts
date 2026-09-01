import {
  FeaturesConfig,
  MapConfig,
  ReactConfig,
  getLensEnvVar,
} from "@adk/lens-react";

import pluginA from "./src/plugins/plugin-a-plugin";
import readPosition from "./src/plugins/read-position-plugin";

import dashboard from "./src/plugins/dashboard-plugin";

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
    id: "dashboard",
    name: "Dashboard",
    routePrefix: "/dashboard",
    plugins: [
      dashboard({
        name: "Dashboard",
        version: "1.0.0",
        mapUI: { summary: [0, 0] },
        banner: { position: "above", collapsible: true },
        sliceKey: "",
      }),
    ],
  },
  {
    id: "state_feature",
    name: "State sharing feature",
    routePrefix: "/state",
    plugins: [
      pluginA({
        name: "Write state",
        version: "1.0.0",
        color: "#1976d2",
        mapUI: { summary: [0, 0] },
        banner: { position: "above", collapsible: true },
        sliceKey: "shareState",
      }),
      readPosition({
        name: "Read state",
        version: "1.0.0",
        sliceKey: "shareState", //TODO: this is not actually used in the plugin, it should be read in route/index
      }),
    ],
  },
] satisfies FeaturesConfig;

export default {
  REACT_CONFIG,
  MAP_CONFIG,
  FEATURES,
};
