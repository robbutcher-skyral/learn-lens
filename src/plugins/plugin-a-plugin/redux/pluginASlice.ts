import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Position = {
  lng: number | null;
  lat: number | null;
};

export interface PluginAState {
  selectedPosition: Position;
}

const initialState: PluginAState = {
  selectedPosition: {
    lng: null,
    lat: null,
  },
};

/**
 * Creates the slice with the name from config.sliceKey. Called by the plugin on init.
 * Use getPluginASlice() in components to access actions.
 */
export function createPluginASlice(sliceKey: string) {
  const slice = createSlice({
    name: sliceKey,
    initialState,
    reducers: {
      setSelectedPosition: (state, action: PayloadAction<Position | null>) => {
        state.selectedPosition.lng = action.payload?.lng || null;
        state.selectedPosition.lat = action.payload?.lat || null;
      },
    },
  });
  _sliceInstance = slice;
  return slice;
}

let _sliceInstance: ReturnType<typeof createPluginASlice> | null = null;

/** Returns the slice instance after createPluginASlice has been called (e.g. in plugin with config.sliceKey). */
export function getPluginASlice() {
  return _sliceInstance;
}
