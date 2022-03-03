import { Paper, Skeleton } from "@mui/material";
import React from "react";

export function LaunchCardSkeleton() {
  return (
    <Paper elevation={3}>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <div className="p-4">
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </Paper>
  );
}
