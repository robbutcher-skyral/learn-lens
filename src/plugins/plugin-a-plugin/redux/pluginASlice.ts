import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** Replace: define state shape and reducers to match your plugin's needs. */
export interface PluginAState {
  selectedId: string | null;
}

const initialState: PluginAState = { selectedId: null };

/**
 * Creates the slice with the name from config.sliceKey. Called by the plugin on init.
 * Use getPluginASlice() in components to access actions.
 */
export function createPluginASlice(sliceKey: string) {
  const slice = createSlice({
    name: sliceKey,
    initialState,
    reducers: {
      setSelectedId: (state, action: PayloadAction<string | null>) => {
        state.selectedId = action.payload;
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
