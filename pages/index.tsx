import type { NextPage } from "next";
import Head from "next/head";
import { appAxios } from "../src/axios";
import { useQuery } from "react-query";
import { Grid } from "@mui/material";
import { CoinCard, CoinCardSkeleton } from "../src/components";
import { CoinCardType } from "@app-types/parts";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery("todos", async () => {
    const { data } = await appAxios.get("?limit=24");
    return data;
  });
  return (
    <div>
      <Head>
        <title>Jina Moon Next.JS Template</title>
      </Head>
      {isLoading ? (
        <Grid className="pt-6" container spacing={3}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} key={i} sm={6} md={4}>
              <CoinCardSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          <h1 className="text-center text-2xl font-semibold mt-3">
            Crepto Currencies Market last 24h
          </h1>
          <Grid className="pt-6" container spacing={3}>
            {data.data.coins.map((coinItem: CoinCardType) => (
              <Grid item xs={12} key={coinItem.uuid} sm={6} md={4}>
                <CoinCard
                  uuid={coinItem.uuid}
                  symbol={coinItem.symbol}
                  name={coinItem.name}
                  color={coinItem.color}
                  iconUrl={coinItem.iconUrl}
                  rank={coinItem.rank}
                  change={coinItem.change}
                  price={coinItem.price}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Home;
