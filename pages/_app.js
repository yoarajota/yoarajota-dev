import "../statics/style.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../public/components/navbar";
import AuthContext from "../public/context/auth";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthContext>
        <Navbar/>
          <Component {...pageProps} />
        </AuthContext>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
