import { Edge } from "react-flow-renderer";

const InitialEdgesLaravel: Edge<any>[] = [
  {
    id: "edge-fundamental-controller",
    source: "node-fundamental",
    target: "node-controllers",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-create",
    source: "node-fundamental",
    target: "node-create-react-app",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-routing",
    source: "node-fundamental",
    target: "node-routing",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-database-relationships",
    source: "node-database",
    target: "node-relationships",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },






  // GREENS
  {
    id: "edge-fundamental-advanced",
    source: "node-fundamental",
    target: "node-advanced",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "edge-advanced-ecosystem",
    source: "node-advanced",
    target: "node-ecosystem",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "edge-head-fundamental",
    source: "node-head",
    target: "node-fundamental",
    animated: true,
    style: { stroke: "green" },
  },
];

export default InitialEdgesLaravel;