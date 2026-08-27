/**
 * Example overview route. Replace with your plugin's main screen (list, filters, actions, etc.).
 */
import type { FC } from "react";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { lensManager } from "@adk/lens-react";
import { PluginACard } from "../components";
import { usePluginAData, usePluginAHover } from "../hooks";

/** Example: list of items with hover. Replace with your overview layout and behaviour. */
export const PluginAOverview: FC = () => {
  const { items } = usePluginAData();
  const { setHoveredId } = usePluginAHover();

  useEffect(() => {
    lensManager.screen.splitView();
  }, []);

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
