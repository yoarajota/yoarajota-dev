import "../../statics/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { LanguageContextProvider } from "components/contexts/language";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <LanguageContextProvider>
          <Component {...pageProps} />
        </LanguageContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
