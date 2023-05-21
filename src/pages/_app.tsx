import "../../statics/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps } from "next/app";
import { ClientContextProvider } from "components/contexts/client";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ClientContextProvider>
            <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ClientContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
