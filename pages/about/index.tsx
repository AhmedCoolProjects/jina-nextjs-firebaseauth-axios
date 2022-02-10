import { CardActionArea, Grid, Link } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ABOUT_ME, IMAGES } from "../../src/constants";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
import type { IconType } from "react-icons";

type SectionType = {
  link: string;
  title: string;
  image?: StaticImageData;
  Icon?: IconType;
};

const SECTION = (props_local: SectionType) => {
  const SIZE = 40;
  const { link, title, image, Icon } = props_local;
  return (
    <Link
      href={link}
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
      target="_blank"
      rel="noopener noreferrer">
      <CardActionArea className="w-full">
        <div className="p-4 flex flex-row w-full items-center">
          {image ? (
            <Image
              alt={title}
              width={SIZE}
              height={SIZE}
              objectFit="cover"
              className="rounded-full mr-8"
              src={image}
            />
          ) : null}
          {Icon ? (
            <Icon
              style={{
                width: SIZE,
                height: SIZE,
              }}
            />
          ) : null}
          <h1 className="ml-4">{title}</h1>
        </div>
      </CardActionArea>
    </Link>
  );
};

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About | Jina Moon Next.js Template</title>
      </Head>
      <div>
        <h1 className="text-center text-3xl font-bold my-6">About</h1>
        <Grid container spacing={3}>
          <Grid
            className="items-center flex
             flex-col space-y-3"
            item
            xs={12}
            sm={12}
            md={6}>
            <Image
              className="rounded-full"
              objectFit="cover"
              src={IMAGES.me}
              alt="Ahmed Bargady"
              width={200}
              height={200}
            />
            <h1 className="text-center text-2xl text-opacity-80 font-semibold">
              {ABOUT_ME.name}
            </h1>
            <h1>{ABOUT_ME.title}</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SECTION
              title="www.ahmedbargady.me"
              image={IMAGES.meLogo}
              link={ABOUT_ME.portfolio}
            />
            <SECTION
              title="@AhmedCoolProjects"
              Icon={BsGithub}
              link={ABOUT_ME.github}
            />
            <SECTION
              title="Ahmed Bargady"
              Icon={BsLinkedin}
              link={ABOUT_ME.linkedin}
            />
            <SECTION
              title="@ahmedBargady"
              Icon={FaKaggle}
              link={ABOUT_ME.kaggle}
            />
            <SECTION
              title="@JinaMoon"
              image={IMAGES.logo}
              link={ABOUT_ME.jinaMoon}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
