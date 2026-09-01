import { mapContext$ } from "@adk/lens-react";
import { useDeckScatterplotLayer, type MapContext } from "@adk/amphi-maps";
import type { PluginAItem } from "../types";
import { usePluginAData } from "../hooks";

export const Layer = () => {
  const { items } = usePluginAData();

  useDeckScatterplotLayer<PluginAItem, MapContext>(mapContext$, {
    data: items,
    getPosition: (data) => data.position,
    getFillColor: () => [0, 0, 255],
    getRadius: () => 3660,
  });
  return null;
};
