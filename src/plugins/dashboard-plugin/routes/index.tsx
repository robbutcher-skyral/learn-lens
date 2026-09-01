/**
 * Example overview route. Replace with your plugin's main screen (list, filters, actions, etc.).
 */
import type { FC } from "react";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { lensManager } from "@adk/lens-react";
import { DashboardCard } from "../components";
import { useDashboardData, useDashboardHover } from "../hooks";

/** Example: list of items with hover. Replace with your overview layout and behaviour. */
export const DashboardOverview: FC = () => {
  const { items } = useDashboardData();
  const { setHoveredId } = useDashboardHover();

  useEffect(() => {
    lensManager.screen.splitView();
  }, []);

  return (
    <Box sx={{ p: 1.5 }}>
      <Typography variant="h6">Dashboard</Typography>
      <Stack spacing={1}>
        {items.map((item) => (
          <DashboardCard
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
