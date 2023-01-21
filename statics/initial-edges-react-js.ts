import { Edge } from "reactflow";

const InitialEdgesReactJs: Edge<any>[] = [
  {
    id: "edge-fundamental-jsx",
    source: "node-fundamental",
    target: "node-jsx",
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
    id: "edge-fundamental-components",
    source: "node-fundamental",
    target: "node-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-props",
    source: "node-fundamental",
    target: "node-props-state",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-lifecycle",
    source: "node-fundamental",
    target: "node-component-lifecycle",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-hooks",
    source: "node-fundamental",
    target: "node-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-composition",
    source: "node-fundamental",
    target: "node-composition-inheritance",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-lists",
    source: "node-fundamental",
    target: "node-lists",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-components-functional",
    source: "node-components",
    target: "node-functional-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-components-class",
    source: "node-components",
    target: "node-class-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-hooks-usestate",
    source: "node-hooks",
    target: "node-usestate",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-hooks-useeffect",
    source: "node-hooks",
    target: "node-useeffect",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-head-fundamental",
    source: "node-head",
    target: "node-fundamental",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "edge-ecosystem-router",
    source: "node-ecosystem",
    target: "node-router",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-router-react-router",
    source: "node-router",
    target: "node-react-router",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-ecosystem-ssg",
    source: "node-ecosystem",
    target: "node-ssg",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-ssg-next",
    source: "node-ssg",
    target: "node-next",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-ssr-next",
    source: "node-ssr",
    target: "node-next",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-ecosystem-api",
    source: "node-ecosystem",
    target: "node-api",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-api-reactquery",
    source: "node-api",
    target: "node-reactquery",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-api-axios",
    source: "node-api",
    target: "node-axios",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-ecosystem-styling",
    source: "node-ecosystem",
    target: "node-styling",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-styling-chakra",
    source: "node-styling",
    target: "node-chakra",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-styling-material",
    source: "node-styling",
    target: "node-material",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-fundamental-advanced",
    source: "node-fundamental",
    target: "node-advanced",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "edge-advanced-context",
    source: "node-advanced",
    target: "node-context",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-refs",
    source: "node-advanced",
    target: "node-refs",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-hooks",
    source: "node-advanced",
    target: "node-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-hooks-adv",
    source: "node-advanced",
    target: "node-hooks-adv",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-render-props",
    source: "node-advanced",
    target: "node-render-props",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-hooks-adv-own-hooks",
    source: "node-hooks-adv",
    target: "node-own-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-hooks-adv-common-hooks",
    source: "node-hooks-adv",
    target: "node-common-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-portal",
    source: "node-advanced",
    target: "node-portal",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-error-boundaries",
    source: "node-advanced",
    target: "node-error-boundaries",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-fiber",
    source: "node-advanced",
    target: "node-fiber",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-order",
    source: "node-advanced",
    target: "node-order",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "edge-advanced-ecosystem",
    source: "node-advanced",
    target: "node-ecosystem",
    animated: true,
    style: { stroke: "green" },
  },
];

export default InitialEdgesReactJs;
