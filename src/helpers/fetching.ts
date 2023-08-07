import { createClient } from "@vercel/edge-config";
import axios from "api/axios";
import getComments from "app/api/comments/logic";
import getExp from "app/api/exp/logic";
import { AllProps } from "asset/types";

export async function getData(): Promise<AllProps> {
    const json = await createClient(process.env.EDGE_CONFIG).getAll();
    const comments = await getComments();
    const exp = getExp();
    const projects = (
      await axios.get("https://api.github.com/users/yoarajota/repos")
    ).data;

    return {
      json,
      comments,
      exp,
      projects,
    };
}
