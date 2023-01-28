import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { defaultResponse } from "../../src/api/assset/types";
import Comments from "./models/Comments";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<defaultResponse>
) {
    const requestMethod = req.method;
    const { LINK_MONGODB } = process.env

    mongoose
        .connect(
            LINK_MONGODB as string
        ).then(() => console.log('conectado'));

    switch (requestMethod) {
        case 'POST':
            const { name, comment } = req.body;

            try {
                if (!name || !comment) {
                    var err = new Error("Preencha todos os campos!");
                    throw err;
                }

                let date = new Date();

                const Comment = {
                    name,
                    comment,
                    date,
                };

                await Comments.create(Comment);
                res.status(201).json({ status: 'success', message: "Comentário depositado com sucesso!" });
            } catch (err: any) {
                res.status(400).json({ status: 'error', message: err.message });
            }
        default:
            try {
                const comments = await Comments.find();
                res.status(200).json({ status: 'success', data: comments });
            } catch (err: any) {
                res.status(400).json({ status: 'error', message: "Erro" });
            }
    }
}