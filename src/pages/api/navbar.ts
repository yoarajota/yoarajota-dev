import { NextApiRequest, NextApiResponse } from "next";
import { defaultResponse } from "../../src/api/assset/types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<defaultResponse>
) {
    res.status(200).json({
        status: 'success',
        data: [
            { key: 0, title: "Home", link: "/" },
            { key: 1, title: "Tecnologias", link: "/tec" },
            { key: 2, title: "Experiências", link: "/exp" },
            { key: 3, title: "Extra", link: "/extra" },
        ],
    })
}