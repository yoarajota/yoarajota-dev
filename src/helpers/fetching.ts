import { createClient } from "@vercel/edge-config";
import getComments from "app/api/comments/logic";
import getExp from "app/api/exp/logic";
import { AllProps, Comment, ExpData, keyable } from "asset/types";

export async function getData(): Promise<AllProps> {
  let json: keyable = {} as keyable;
  let comments: Array<Comment> = [] as Array<Comment>;
  let exp: ExpData = {} as ExpData;
  let projects: keyable = {} as keyable;
  await Promise.all([
    new Promise(async (resolve) => { resolve(await createClient(process.env.EDGE_CONFIG).getAll()) }),
    new Promise(async (resolve) => { resolve(await getComments()) }),
    new Promise(async (resolve) => { resolve(getExp()) }),
    new Promise(async (resolve) => { resolve(await (await fetch("https://api.github.com/users/yoarajota/repos")).json()) }),
  ]).then((res) => {
    json = res[0] as keyable;
    comments = res[1] as Array<Comment>;
    exp = res[2] as ExpData;
    projects = res[3] as keyable;
  });

  return {
    json,
    comments,
    exp,
    projects,
  }
}
