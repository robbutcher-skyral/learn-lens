import type { FC } from "react";
import { Box, Typography } from "@mui/material";

export interface ReadPositionProps {
  lng: number | null;
  lat: number | null;
}

export const ReadPosition: FC<ReadPositionProps> = ({ lng, lat }) => (
  <Box>
    <Typography variant="subtitle2">lng: {lng}</Typography>
    <Typography variant="subtitle2">lat: {lat}</Typography>
  </Box>
);
