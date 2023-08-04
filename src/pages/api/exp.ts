import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<defaultResponse>
) {
  res.status(200).json({
    status: "success",
    data: {
      "pt-BR": [
        {
          title: "Estudante Autodidata",
          time: "12 19 - ∞",
          progress: "8%",
          id: 1,
          text1:
            "Mesmo desde pequeno por dentro da tecnologia, foi o começo do estudo da programação. Desdobrando-se para estudar tecnologia durante o tempo livre, baseado em material gratuito na Internet.",
          text2:
            "Depois de algumas pesquisas, a área inicial escolhida foi o desenvolvimento WEB, tendo como base o HTML, CSS e JAVASCRIPT, PHP, banco de dados e principalmente, a biblioteca REACT-JS e suas ramificações/addons.",
          text3:
            "O objetivo é não conter-se apenas em uma área da tecnologia, mas ter amplitude de conhecimento nas esferas computacionais, como segurança da informação, ciência de dados, UX, etc...",
          popover_text:
            "LOREMMMMMMM.",
        },
        {
          title: "Includer Tecnologia",
          time: "04 22 - xx xx",
          progress: "25%",
          id: 2,
          text1:
            // "Primeiro emprego como desenvolvedor. A Includer Tecnologia é uma startup localizada em Bento Gonçalves - RS, focada no desenvolvimento de soluções empresariais",
            "Experiência desenvolvimento de páginas da web, com habilidades em Rest API em Laravel (PHP), construção de interface de usuário com React (Javascript), consultas ao banco relacional com SQL, bibliotecas e ferramentas para envio de e-mail e geração de PDF, Job Scheduler e automatizações. Responsável por desenvolver soluções personalizadas para atender as demandas específicas de cada projeto.",
          text2:
            // "Atuando como desenvolvedor WEB FULLSTACK, utilizando o framework Laravel e o React JS como tecnologias primárias. Desenvolvimento de CRUD's, com frontend baseado na biblioteca de JavaScript REACT-Js, e BACKEND via Laravel, com a manipulação de dados via a ORM ELOQUENT, e gerenciamento de banco de dados pelo POSTGRESQL.",
            "Além disso, o atuação na tutoria e treinamento de equipes de desenvolvedores, fornecendo suporte para que possam desenvolver suas habilidades e aprimorar seu trabalho. Experiência em implementar, atualizar e ajustar sistemas diversos, incluindo redes intranet para comunicação de equipes, sistema de atendimento (interno e externo), gerenciamento de patrimônio e sistema de configuração de produtos.",
          text3:
            // "Gerenciamento de sprints pelo método SCRUM, e versionamento GIT feitos pelo suporte do sistema da Microsoft Azure Devops.",
            "Adicionalmente, o conhecimento em módulo específico de compras e sistema de geração e gerenciamento de documentos de faturamento, como notas fiscais de compra eletrônica, romaneio e demonstrativos de locação. Habilidoso em trabalhar em equipe, possui excelente capacidade de resolução de problemas e é altamente comprometido em fornecer soluções eficientes e de alta qualidade.",
          level: "Cargo Nível Junior",
          popover_text:
            "Marcando o ingresso no mercado de trabalho da programação.",
        }],
      "en-US": [{
        title: "Estudante Autodidata",
        time: "12 19 - ∞",
        progress: "3%",
        id: 1,
        text1:
          "Mesmo desde pequeno por dentro da tecnologia, foi o começo do estudo da programação. Desdobrando-se para estudar tecnologia durante o tempo livre, baseado em material gratuito na Internet.",
        text2:
          "Depois de algumas pesquisas, a área inicial escolhida foi o desenvolvimento WEB, tendo como base o HTML, CSS e JAVASCRIPT, PHP, banco de dados e principalmente, a biblioteca REACT-JS e suas ramificações/addons.",
        text3:
          "O objetivo é não conter-se apenas em uma área da tecnologia, mas ter amplitude de conhecimento nas esferas computacionais, como segurança da informação, ciência de dados, UX, etc...",
        popover_text:
          "LOREMMMMMMM.",
      }, {
        title: "Includer Tecnologia",
        time: "04 22 - xx xx",
        progress: "20%",
        id: 2,
        text1:
          "Primeiro emprego como desenvolvedor. A Includer Tecnologia é uma startup localizada em Bento Gonçalves - RS, focada no desenvolvimento de soluções empresariais",
        text2:
          "Atuando como desenvolvedor WEB FULLSTACK, utilizando o framework Laravel e o React JS como tecnologias primárias. Desenvolvimento de CRUD's, com frontend baseado na biblioteca de JavaScript REACT-Js, e BACKEND via Laravel, com a manipulação de dados via a ORM ELOQUENT, e gerenciamento de banco de dados pelo POSTGRESQL.",
        text3:
          "Gerenciamento de sprints pelo método SCRUM, e versionamento GIT feitos pelo suporte do sistema da Microsoft Azure Devops.",
        level: "Cargo Nível Junior",
        popover_text: "Marcando o ingresso no mercado de trabalho da programação.",
      }]
    }
  });
}
