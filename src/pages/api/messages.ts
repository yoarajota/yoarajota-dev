import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import { get } from "@vercel/edge-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<defaultResponse>
) {
  const messages = await get("system_messages");

  res.status(200).json({
    status: "success",
    data: messages ?? {},
  });
}
