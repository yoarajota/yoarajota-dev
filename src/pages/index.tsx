import React from "react";
import { ClientContextProvider } from "components/contexts/client";
import { createClient } from "@vercel/edge-config";
import All from "sections/all";
import { keyable } from "asset/types";
import axios from "api/axios";

export const getServerSideProps = async () => {
  return {
    props: {
      json: await createClient(process.env.EDGE_CONFIG).getAll(),
      comments: await axios.get("api/comments"),
      exp: await axios.get("api/exp"),
      projects: await axios.get("https://api.github.com/users/yoarajota/repos")
    },
  };
};

export default function Home({ json, comments, exp }: keyable) {
  return (
    <ClientContextProvider json={json}>
      <All exp={exp} comments={comments} />
    </ClientContextProvider>
  );
}