import React from "react";
import { ClientContextProvider } from "components/contexts/client";
import { createClient } from "@vercel/edge-config";
import All from "sections/all";
import { keyable } from "asset/types";

export const getStaticProps = async () => {
  return {
    props: {
      json: await createClient(process.env.EDGE_CONFIG).getAll(),
    },
  };
};

export default function Home({ json }: keyable) {
  return (
    <ClientContextProvider json={json}>
      <All />
    </ClientContextProvider>
  );
}
