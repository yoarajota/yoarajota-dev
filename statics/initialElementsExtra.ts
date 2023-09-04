import { Node, Position } from "reactflow";
import TypescriptSvg from "../src/components/svg/typescriptSvg";
import PythonSvg from "../src/components/svg/pythonSvg";
import PostgresSvg from "../src/components/svg/postgresSvg";
import NodejsSvg from "../src/components/svg/nodejsSvg";

const InitialElementsExtra: Node<any>[] = [
    {
        id: "e-node-extra-head-ts",
        type: "NodeHead",
        sourcePosition: Position.Bottom,
        selectable: false,
        style: {
            padding: "0",
            minWidth: "260px",
            background: "none",
            border: "none",
        },
        data: {
            label: "Typescript",
            xp: "1",
            lvl: "2",
            Img: TypescriptSvg,
        },
        position: { x: 240 * 1, y: 2850 },
    },
    {
        id: "e-node-extra-head-python",
        type: "NodeHead",
        sourcePosition: Position.Bottom,
        selectable: false,
        style: {
            padding: "0",
            minWidth: "260px",
            background: "none",
            border: "none",
        },
        data: {
            label: "Python",
            xp: "1",
            lvl: "2",
            Img: PythonSvg,
        },
        position: { x: 240 * 2, y: 2850 },
    },
    {
        id: "e-node-extra-head-postgres",
        type: "NodeHead",
        sourcePosition: Position.Bottom,
        selectable: false,
        style: {
            padding: "0",
            minWidth: "260px",
            background: "none",
            border: "none",
        },
        data: {
            label: "Postgres",
            xp: "1",
            lvl: "2",
            Img: PostgresSvg,
        },
        position: { x: 240 * 3, y: 2850 },
    },
    {
        id: "e-node-extra-head-nodejs",
        type: "NodeHead",
        sourcePosition: Position.Bottom,
        selectable: false,
        style: {
            padding: "0",
            minWidth: "260px",
            background: "none",
            border: "none",
        },
        data: {
            label: "Node.js",
            xp: "1",
            lvl: "2",
            Img: NodejsSvg,
        },
        position: { x: 240 * 4, y: 2850 },
    },
];

export default InitialElementsExtra;
