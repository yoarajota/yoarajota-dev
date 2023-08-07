import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import getExp from "./logic";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<defaultResponse>
) {
  res.status(200).json({
    status: "success",
    data: getExp(),
  });
}
