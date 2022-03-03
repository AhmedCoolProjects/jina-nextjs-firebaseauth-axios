import { LauncheCardProps } from "@app-types";
import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

export function LauncheCard(props: LauncheCardProps) {
  const {
    mission_name,
    launch_site,
    is_tentative,
    launch_success,
    links,
    launch_year,
    rocket,
  } = props;

  return (
    <Paper elevation={3}>
      <div
        className="w-full relative
      h-[200px]">
        <Image
          src={links.flickr_images[0]}
          alt={mission_name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h1
          className="text-base sm:text-xl
        font-semibold
        ">
          {mission_name}
        </h1>
        <h1>{launch_year}</h1>
        <h1>Rocket Name: {rocket.rocket_name}</h1>
        <h1>Rocket Type: {rocket.rocket_type}</h1>
        <h1>Launch Site: {launch_site.site_name}</h1>
        <h1>Is a tentative: {is_tentative ? "✔️" : "❌"}</h1>
        <h1>Successed: {launch_success ? "✔️" : "❌"}</h1>
      </div>
    </Paper>
  );
}
