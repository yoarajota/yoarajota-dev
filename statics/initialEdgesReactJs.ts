import { Edge } from "reactflow";

const InitialEdgesReactJs: Edge<any>[] = [
  {
    id: "r-edge-fundamental-jsx",
    source: "r-node-fundamental",
    target: "r-node-jsx",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-create",
    source: "r-node-fundamental",
    target: "r-node-create-react-app",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-components",
    source: "r-node-fundamental",
    target: "r-node-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-props",
    source: "r-node-fundamental",
    target: "r-node-props-state",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-lifecycle",
    source: "r-node-fundamental",
    target: "r-node-component-lifecycle",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-hooks",
    source: "r-node-fundamental",
    target: "r-node-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-composition",
    source: "r-node-fundamental",
    target: "r-node-composition-inheritance",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-lists",
    source: "r-node-fundamental",
    target: "r-node-lists",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-components-functional",
    source: "r-node-components",
    target: "r-node-functional-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-components-class",
    source: "r-node-components",
    target: "r-node-class-components",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-hooks-usestate",
    source: "r-node-hooks",
    target: "r-node-usestate",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-hooks-useeffect",
    source: "r-node-hooks",
    target: "r-node-useeffect",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-head-fundamental",
    source: "r-node-head",
    target: "r-node-fundamental",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "r-edge-ecosystem-router",
    source: "r-node-ecosystem",
    target: "r-node-router",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-router-react-router",
    source: "r-node-router",
    target: "r-node-react-router",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-ecosystem-ssg",
    source: "r-node-ecosystem",
    target: "r-node-ssg",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-ssg-next",
    source: "r-node-ssg",
    target: "r-node-next",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-ssr-next",
    source: "r-node-ssr",
    target: "r-node-next",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-ecosystem-api",
    source: "r-node-ecosystem",
    target: "r-node-api",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-api-reactquery",
    source: "r-node-api",
    target: "r-node-reactquery",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-api-axios",
    source: "r-node-api",
    target: "r-node-axios",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-ecosystem-styling",
    source: "r-node-ecosystem",
    target: "r-node-styling",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-styling-chakra",
    source: "r-node-styling",
    target: "r-node-chakra",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-styling-material",
    source: "r-node-styling",
    target: "r-node-material",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-fundamental-advanced",
    source: "r-node-fundamental",
    target: "r-node-advanced",
    animated: true,
    style: { stroke: "green" },
  },
  {
    id: "r-edge-advanced-context",
    source: "r-node-advanced",
    target: "r-node-context",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-refs",
    source: "r-node-advanced",
    target: "r-node-refs",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-hooks-adv",
    source: "r-node-advanced",
    target: "r-node-hooks-adv",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-render-props",
    source: "r-node-advanced",
    target: "r-node-render-props",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-hooks-adv-own-hooks",
    source: "r-node-hooks-adv",
    target: "r-node-own-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-hooks-adv-common-hooks",
    source: "r-node-hooks-adv",
    target: "r-node-common-hooks",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  // {
  //   id: "r-edge-advanced-portal",
  //   source: "r-node-advanced",
  //   target: "r-node-portal",
  //   animated: true,
  //   style: { stroke: "rgb(195, 74, 54)" },
  // },
  {
    id: "r-edge-advanced-error-boundaries",
    source: "r-node-advanced",
    target: "r-node-error-boundaries",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-fiber",
    source: "r-node-advanced",
    target: "r-node-fiber",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-order",
    source: "r-node-advanced",
    target: "r-node-order",
    animated: true,
    style: { stroke: "rgb(195, 74, 54)" },
  },
  {
    id: "r-edge-advanced-ecosystem",
    source: "r-node-advanced",
    target: "r-node-ecosystem",
    animated: true,
    style: { stroke: "green" },
  },
];

export default InitialEdgesReactJs;
