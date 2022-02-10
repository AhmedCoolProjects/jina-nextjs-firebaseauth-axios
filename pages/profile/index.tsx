import { Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useAppSelector } from "../../src/store";
import { LogoutDialog } from "../../src/components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../src/utils";

const Profile: NextPage = () => {
  const user = useAppSelector((state) => state.user);
  // for the logout dialog
  const [logoutOpen, setLogoutOpen] = useState(false);
  const handleLogoutOpen = () => {
    setLogoutOpen(true);
  };
  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  if (user.email)
    return (
      <div>
        <Head>
          <title>Profile | Jina Moon Next.js Template</title>
        </Head>
        <div>
          <h1 className="text-center text-3xl font-bold my-6">Profile</h1>
          <Grid container spacing={3}>
            <Grid
              className="items-center flex
             flex-col space-y-3"
              item
              xs={12}
              sm={12}
              md={6}>
              {user?.photoURL ? (
                <Image
                  className="rounded-full"
                  objectFit="cover"
                  src={user.photoURL}
                  alt={user.name}
                  width={200}
                  height={200}
                />
              ) : null}
              <h1 className="text-center text-2xl text-opacity-80 font-semibold">
                {user.name}
              </h1>
              <h1>{user.email}</h1>
              <Button onClick={handleLogoutOpen}>Logout</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h1 className="text-xl text-center">Your Orders</h1>
            </Grid>
          </Grid>
        </div>
        <LogoutDialog
          open={logoutOpen}
          onClose={handleLogoutClose}
          userName={user.name}
        />
      </div>
    );
  return (
    <div className="items-center h-[150px] flex flex-col justify-center">
      <h1 className="text-xl ">Login to view your profile</h1>
    </div>
  );
};

export default Profile;
