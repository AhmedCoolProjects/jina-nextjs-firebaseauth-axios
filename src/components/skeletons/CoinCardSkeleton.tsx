import { Paper, Skeleton } from "@mui/material";

export function CoinCardSkeleton() {
  return (
    <Paper elevation={3} className="w-full space-y-2 flex p-3 flex-col">
      <div className="flex w-full flex-row items-center space-x-3">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="20%" />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Paper>
  );
}
