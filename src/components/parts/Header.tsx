import { Paper, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMAGES } from "../../constants";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";

export function Header() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  const toggleTheme = () => {
    dispatch(changeModeAction());
    localStorage.setItem("isDark", `${!isDark}`);
  };
  return (
    <Paper
      elevation={3}
      className="w-full top-0 z-50 sticky p-3 items-center justify-between flex flex-row">
      <Link href="/" passHref>
        <div className="flex cursor-pointer flex-row items-center space-x-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
            <Image src={IMAGES.logo} alt="logo" layout="fill" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold">Jina Moon</h1>
        </div>
      </Link>
      <IconButton onClick={toggleTheme}>
        {isDark ? <BsSun color="yellow" /> : <BsMoonStars color="purple" />}
      </IconButton>
    </Paper>
  );
}
