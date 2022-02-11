import React from "react";
import { Paper } from "@mui/material";
import { CoinCardType } from "@app-types/parts";
import Image from "next/image";

export function CoinCard(props: CoinCardType) {
  const { symbol, name, price, color, iconUrl, rank, change } = props;
  return (
    <Paper elevation={3} className="w-full space-y-2 flex p-3 flex-col">
      <div className="flex w-full flex-row items-center space-x-3">
        <Image
          src={iconUrl}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1
          style={{
            color: color,
          }}
          className={`text-base`}>
          {name} ({symbol})
        </h1>
      </div>
      <h1 className="text-sm font-semibold">Rank: {rank}</h1>
      <h1
        style={{
          color: parseFloat(change) > 0 ? "green" : "red",
        }}>
        {change}% <sup>24h</sup>
      </h1>
      <h1 className="text-right">
        {/* format price */}
        {parseFloat(price).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </h1>
    </Paper>
  );
}
