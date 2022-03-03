import { useQuery } from "@apollo/client";
import { LauncheCardProps } from "@app-types";
import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { GET_LAUNCHES_PAST } from "../src/apollo";
import { LaunchCardSkeleton, LauncheCard } from "../src/components";

const Home: NextPage = () => {
  const {
    data: dataLaunchesPast,
    loading: loadingLaunchesPast,
    error: errorLaunchesPast,
  } = useQuery(GET_LAUNCHES_PAST, {
    variables: {
      limit: 35,
    },
  });
  return (
    <div>
      <Head>
        <title>Jina Moon Next.JS Template</title>
      </Head>
      <div className="py-4">
        {loadingLaunchesPast ? (
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((nbr) => (
              <Grid item xs={12} sm={6} md={4} key={nbr}>
                <LaunchCardSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {dataLaunchesPast.launchesPast.map((launch: LauncheCardProps) =>
              launch.links.flickr_images.length > 0 ? (
                <Grid item xs={12} sm={6} md={4} key={launch.id}>
                  <LauncheCard {...launch} />
                </Grid>
              ) : null
            )}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Home;
