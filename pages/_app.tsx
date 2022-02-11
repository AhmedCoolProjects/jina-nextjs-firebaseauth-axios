import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";
import { Provider } from "react-redux";
import { appStore } from "../src/store";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
