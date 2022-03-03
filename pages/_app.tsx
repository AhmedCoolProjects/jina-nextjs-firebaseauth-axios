import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";
import { Provider } from "react-redux";
import { appStore } from "../src/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
