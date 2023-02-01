import React from "react";
import { Node, Position } from "reactflow";
import LaravelSvg from "../public/images/laravelsvg";
import NodeHead from "../src/components/nodes/nodeHead";
import NodeText from "../src/components/nodes/nodeText";

const InitialElementsLaravel: Node<any>[] = [
  {
    id: "node-head",
    type: "NodeHead",
    sourcePosition: Position.Bottom,
    selectable: false,
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    data: {
      label: "React JS",
      xp: '1',
      lvl: '2',
      img: LaravelSvg
    },
    position: { x: 1180, y: 100 }
  },
  {
    id: "node-fundamental",
    style: {
      padding: "0",
      minWidth: "260px",
      background: "none",
      border: "none",
    },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    data: {
      label: 'Fundamental',
    },
    position: { x: 1200, y: 400 },
  },
  {
    id: "node-jsx",
    style: {
      padding: "0",
      minWidth: "280px",
      background: "none",
      border: "none",
    },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: 'JSX',
    },
    position: { x: 800, y: 400 },
  },
];

export default InitialElementsLaravel;