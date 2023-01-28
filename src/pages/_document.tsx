import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='1' />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;0,500;1,400;1,500&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=UnifrakturCook&display=swap"
        rel="stylesheet"
      />
      <link />
      <meta name="description" content="Portfolio de João Vítor Basso Sberse" />
      <link rel="icon" href="/favicon.ico" />
      <title>y o a r a j o t a</title>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
