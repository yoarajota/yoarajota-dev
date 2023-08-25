import { createClient } from "@vercel/edge-config";
import getComments from "app/api/comments/logic";
import getInformation from "app/api/information/logic";
import { AllProps, Comment, Info, keyable } from "asset/types";

export async function getData(): Promise<AllProps> {
  let json: keyable = {} as keyable;
  let comments: Array<Comment> = [] as Array<Comment>;
  let information: Array<Info> = {} as Array<Info>;
  await Promise.all([
    new Promise(async (resolve) => { resolve(await createClient(process.env.EDGE_CONFIG).getAll()) }),
    new Promise(async (resolve) => { resolve(await getComments()) }),
    new Promise(async (resolve) => { resolve(await getInformation()) })
  ]).then((res) => {
    json = res[0] as keyable;
    comments = res[1] as Array<Comment>;
    information = res[2] as Array<Info>;
  });

  return {
    json,
    comments,
    information
  }
}
