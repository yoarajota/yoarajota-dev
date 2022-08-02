import "../statics/style.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function MyApp({ Component, pageProps }) {
  const [root, setRoot] = useState();

  useEffect(() => {
    const root = createRoot(document.getElementById("__next"));
    setRoot(root);
  }, []);

  if (!root) {
    return null;
  }

  root.render(
    <ChakraProvider resetCSS>
      {/* <Navbar> */}
        <Component {...pageProps} />
      {/* </Navbar> */}
    </ChakraProvider>
  );
}

export default MyApp;
