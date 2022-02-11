import { Paper, IconButton, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../constants";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";
import { Auth } from "..";
import { Login, Register, ResetPassword } from "./Auth";
import { useState } from "react";

export function Header() {
  // for theming
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  const toggleTheme = () => {
    dispatch(changeModeAction());
    localStorage.setItem("isDark", `${!isDark}`);
  };
  // for the auth dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for the redux user
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <Paper className="w-full sticky top-0 z-50 p-3 items-center justify-between flex flex-row">
        <Link href="/" passHref>
          <div className="flex cursor-pointer flex-row items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image src={IMAGES.logo} alt="logo" layout="fill" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">Jina Moon</h1>
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-2">
          <Link href="/about" passHref>
            <Button>About</Button>
          </Link>
          {user.email ? (
            <Link href="/profile" passHref>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Button onClick={handleClickOpen}>Login</Button>
          )}
          <IconButton onClick={toggleTheme}>
            {isDark ? <BsSun color="yellow" /> : <BsMoonStars color="purple" />}
          </IconButton>
        </div>
      </Paper>
      <Auth
        loginButtonText="Login"
        loginChildren={<Login />}
        open={open}
        onClose={handleClose}
        loginTitle="Login"
        registerButtonText="Register"
        registerChildren={<Register />}
        registerTitle="Register"
        resetPasswordButtonText="Reset Password"
        resetPasswordChildren={<ResetPassword />}
        resetPasswordTitle="Reset Password"
      />
    </>
  );
}
