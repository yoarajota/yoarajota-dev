import { NextApiRequest, NextApiResponse } from "next";
import { defaultResponse } from "asset/types";
import Comments from "../models/Comments";
import dbConnect from "../../../lib/dbConnect";
import getComments from "./logic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<defaultResponse>
) {
  const requestMethod = req.method;

  switch (requestMethod) {
    case "POST":
      await dbConnect();
      const { name, comment, date } = req.body;

      try {
        const Comment = {
          name,
          comment,
          date,
        };

        await Comments.create(Comment);

        res.json({
          status: "success",
          message: "Comentário depositado com sucesso!",
        });
      } catch (err: any) {
        res.status(400).json({ status: "error", message: err.message });
      }
      break;
    default:
      try {
        const comments = await getComments();
        res.json({ status: "success", data: comments });
      } catch (err: any) {
        res.json({ status: "error", message: "Erro" });
      }
  }
}
