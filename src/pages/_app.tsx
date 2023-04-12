import "../../statics/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { ClientContextProvider } from "components/contexts/client";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ClientContextProvider>
          {/* <div style={{ visibility: mounted ? 'visible' : 'hidden' }}> */}
            <Component {...pageProps} />
          {/* </div> */}
        </ClientContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
