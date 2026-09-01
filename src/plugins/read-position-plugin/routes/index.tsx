/**
 * Example overview route. Replace with your plugin's main screen (list, filters, actions, etc.).
 */
import type { FC } from "react";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { lensManager } from "@adk/lens-react";
import { ReadPosition } from "../components";
import { useSelector } from "react-redux";

type Position = {
  lng: number | null;
  lat: number | null;
};

//TODO: how should this be shared between plugins when they're supposed to be isolated?
export interface PluginAState {
  selectedPosition: Position;
}

type State = {
  shareState: PluginAState;
};

/** Example: list of items with hover. Replace with your overview layout and behaviour. */
export const ReadPositionOverview: FC = () => {
  const { lng, lat } = useSelector(
    (state: State) => state.shareState.selectedPosition,
  );

  useEffect(() => {
    lensManager.screen.fullscreenFirstPane();
  }, []);

  return (
    <Box sx={{ p: 1.5 }}>
      <Typography variant="h6">Position</Typography>
      <Stack spacing={1}>
        <ReadPosition lng={lng} lat={lat} />
      </Stack>
    </Box>
  );
};
