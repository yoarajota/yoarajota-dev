import { NextApiRequest, NextApiResponse } from "next";
import { defaultResponse } from "../../src/api/assset/types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<defaultResponse>
) {
    res.status(200).json({
        status: "success",
        data: [
            {
                title: "Estudante Autodidata",
                time: "12 19 - ∞",
                text1:
                    "Mesmo desde pequeno por dentro da tecnologia, foi o começo do estudo da programação. Desdobrando-se para estudar tecnologia durante o tempo livre, baseado em material gratuito na Internet.",
                text2:
                    "Depois de algumas pesquisas, a área inicial escolhida foi o desenvolvimento WEB, tendo como base o HTML, CSS e JAVASCRIPT, PHP, banco de dados e principalmente, a biblioteca REACT-JS e suas ramificações/addons.",
                text3:
                    "O objetivo é não conter-se apenas em uma área da tecnologia, mas ter amplitude de conhecimento nas esferas computacionais, como segurança da informação, ciência de dados, UX, etc...",
            },
            {
                title: "Includer Tecnologia",
                time: "04 22 - xx xx",
                text1:
                    "Primeiro emprego como desenvolvedor. A Includer Tecnologia é uma startup localizada em Bento Gonçalves - RS, focada no desenvolvimento de soluções empresariais",
                text2:
                    "Atuando como desenvolvedor WEB FULLSTACK, utilizando o framework Laravel e o React JS como tecnologias primárias. Desenvolvimento de CRUD's, com frontend baseado na biblioteca de JavaScript REACT-Js, e BACKEND via Laravel, com a manipulação de dados via a ORM ELOQUENT, e gerenciamento de banco de dados pelo POSTGRESQL.",
                text3:
                    "Gerenciamento de sprints pelo método SCRUM, e versionamento GIT feitos pelo suporte do sistema da Microsoft Azure Devops.",
                progress: "20%",
                level: "Cargo Nível Junior",
                popover_text:
                    "Marcando o ingresso no mercado de trabalho da programação.",
            },
        ],
    })
}