import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<defaultResponse>
) {
    res.status(200).json({
        status: "success",
        data: {
            "pt-BR": {
                subtitle_work: "Anos usando profissionalmente",
                subtitle_study: "Anos estudando",
                alert:
                    "Por favor, note que esta página está em construção e pode estar incompleta ou sujeita a alterações.",
                resume_text: [
                    "Desenvolvedor Full Stack proficiente em tecnologias de front-end e server-side. ",
                    "Atualmente trazendo inovação, inteligência e alta performance no ramo de ERP com um sistema web complexo.",
                    "Ótimo membro de equipe, tutorando e dividindo conhecimento técnico com os envolvidos.",
                    " ",
                    "Entenda um pouco melhor de mim;",
                ],
                projects_title: "Projetos",
                tech_title: "Tecnologias",
                exp_title: "Experiências",
                tec_title: "Principais Tecnologias",
                academy_title: "Vida Acadêmica",
                academy_name: "🎓 Instituto Federal do Rio Grande do Sul",
                academy_extra_info: [
                    "It is a type of institution specialized in offering professional and technological education in different teaching modalities.",
                    "These institutions make the 'Rede Federal de Educação Profissional, Científica e Tecnologica' (Federal Network of Professional, Scientific and Technological Education)",
                ],
                academy_start: "⏳ 23/03/2022",
                academy_course: "📚 Análise e Desenvolvimento de Sistemas",
                academy_course_info: [
                    "A formação em Análise e Desenvolvimento de Sistemas se enquadra como um curso tecnológico da área de Informação e Comunicação. Por isso, deve apresentar conteúdos gerais sobre esse campo, além dos conteúdos específicos da área. ",
                    "O curso forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.",
                ],
                academy_subjects_list: [
                    "Programação Orientada a Objetos I",
                    "Programação Orientada a Objetos II",
                    "Álgebra Linear",
                    "Estatística",
                    "Modelagem e Projeto de Banco de Dados",
                    "Modelagem de Software",
                    "Engenharia de Requisitos",
                    "Desenvolvimento para Sistemas da Internet",
                    "Desenvolvimentos de Sistemas",
                    "Programação para Dispositivos Móveis",
                ],
                objectives_title: "Objetivos",
                interest_title: "Interesses"
            },
            "en-US": {
                subtitle_work: "Years using professionally",
                subtitle_study: "Years of studying",
                alert:
                    "This webpage is currently under construction and may be incomplete or subject to changes.",
                resume_text: [
                    "Fullstack Developer profficient in frot-end and server-side technologies.",
                    "At the moment bringing inovation, inteligence and high performance on ERP area with a complex web system.",
                    "Great team member, tutoring and sharing technical knowledge with the others.",
                    " ",
                    "Know me better;",
                ],
                projects_title: "Projects",
                tech_title: "Technologies",
                exp_title: "Experiences",
                tec_title: "Principal Technologies",
                academy_title: "Academic Background",
                academy_name: "🎓 Instituto Federal do Rio Grande do Sul",
                academy_extra_info: [
                    "It is a type of institution specialized in offering professional and technological education in different teaching modalities.",
                    "These institutions make the 'Rede Federal de Educação Profissional, Científica e Tecnologica' (Federal Network of Professional, Scientific and Technological Education)",
                ],
                academy_start: "⏳ 03/23/2022",
                academy_course: "📚 Systems Analysis and Development",
                academy_course_info: [
                    "The graduation in Systems Analysis and Development fits as a technological course in the area of Information and Communication. Therefore, it must present general contents about this field, in addition to specific contents of the area.",
                    "The course trains professionals capable of developing, analyzing, designing, implementing and updating systems (software) for various sectors of activity.",
                ],
                academy_subjects_list: [
                    "Object-oriented Programming I",
                    "Object-oriented Programming II",
                    "Linear Algebra",
                    "Statistics",
                    "Database Modeling",
                    "Software Modeling",
                    "Requirements Engineering",
                    "Websystems Development",
                    "System Development",
                    "Mobile Development",
                ],
                objectives_title: "Objectives",
                interest_title: "Interests"
            },
        }
    });
}
