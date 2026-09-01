/**
 * Example overview route. Replace with your plugin's main screen (list, filters, actions, etc.).
 */
import type { FC } from "react";
import { useCallback, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { lensManager, mapContext$ } from "@adk/lens-react";
import { PluginACard } from "../components";
import { usePluginAData, usePluginAHover } from "../hooks";
import { useMapEvent } from "@adk/amphi-maps";
import { getPluginASlice } from "../redux/pluginASlice";
import { useDispatch } from "react-redux";

/** Example: list of items with hover. Replace with your overview layout and behaviour. */
export const PluginAOverview: FC = () => {
  const { items } = usePluginAData();
  const { setHoveredId } = usePluginAHover();
  const dispatch = useDispatch();
  const {
    actions: { setSelectedPosition },
  } = getPluginASlice()!;

  useEffect(() => {
    lensManager.screen.splitView();
  }, []);

  const handleMapClick = useCallback(
    (event: { lngLat: { lng: any; lat: any } }) => {
      const { lng, lat } = event.lngLat;
      dispatch(setSelectedPosition({ lng, lat }));
    },
    [setSelectedPosition],
  );

  useMapEvent(mapContext$, "click", handleMapClick);

  return (
    <Box sx={{ p: 1.5 }}>
      <Typography variant="h6">PluginA</Typography>
      <Stack spacing={1}>
        {items.map((item) => (
          <PluginACard
            key={item.id}
            item={item}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </Stack>
    </Box>
  );
};
