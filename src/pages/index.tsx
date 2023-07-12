import React from "react";
import { ClientContextProvider } from "components/contexts/client";
import { createClient } from "@vercel/edge-config";
import All from "sections/all";

export const getStaticProps = async (p: any) => {
  return {
    props: {
      messages: await createClient(String(process.env.EDGE_CONFIG)).get(
        "system_messages"
      ),
    },
  };
};

export default function Home({ messages }: any) {
  return (
    <ClientContextProvider messages={messages}>
      <All />
    </ClientContextProvider>
  );
}
