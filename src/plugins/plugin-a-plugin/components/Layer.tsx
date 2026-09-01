import { mapContext$ } from "@adk/lens-react";
import { useDeckScatterplotLayer, type MapContext } from "@adk/amphi-maps";
import { useSelector } from "react-redux";
import { type PluginAState } from "../redux/pluginASlice";
import type { PluginAItem } from "../types";
import { usePluginAData } from "../hooks";

type State = {
  pluginAState: PluginAState;
};

export const Layer = () => {
  const { items } = usePluginAData();
  const { lng, lat } = useSelector(
    (state: State) => state.pluginAState.selectedPosition,
  );
  console.log("selectedPosition", lng, lat);

  useDeckScatterplotLayer<PluginAItem, MapContext>(mapContext$, {
    data: items,
    getPosition: (data) => data.position,
    getFillColor: () => [0, 0, 255],
    getRadius: () => 3660,
  });
  return null;
};
