import "../statics/style.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const [root, setRoot] = useState();


  useEffect(() => {
    const root = createRoot(document.getElementById("__next"));
    setRoot(root);
  }, []);

  if (!root) {
    return null;
  }

  root.render(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS>
        {/* <Navbar> */}
        <Component {...pageProps} />
        {/* </Navbar> */}
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
