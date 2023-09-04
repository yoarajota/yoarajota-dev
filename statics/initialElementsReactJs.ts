import React from "react";
import { Position } from "react-flow-renderer";
import { Node } from "reactflow";
import ReactSvg from "../src/components/svg/reactSvg";

const InitialElementsReactJs: Node<any>[] = [
  {
    id: 'r-node-head',
    type: "NodeHead",
    sourcePosition: Position.Bottom,
    selectable: false,
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    data: {
      label: "React JS",
      xp: '1',
      lvl: '2',
      Img: ReactSvg
    },
    position: { x: 1180, y: 100 }
  },
  {
    id: 'r-node-fundamental',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: {
      label: "Fundamental",
      biggerVariable: true,
      bottomSource: true
    },
    position: { x: 1200, y: 400 }
  },
  {
    id: 'r-node-jsx',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label:
        "JSX"
    },
    position: { x: 800, y: 400 }
  },
  {
    id: 'r-node-create-react-app',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label:
        "Create React App"
    },
    position: { x: 750, y: 460 }
  },
  {
    id: 'r-node-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Components"
    },
    position: { x: 780, y: 520 }
  },
  {
    id: 'r-node-props-state',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Props vs State"
    },
    position: { x: 840, y: 570 }
  },
  {
    id: 'r-node-functional-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Functional Components"
    },
    position: { x: 400, y: 540 }
  },
  {
    id: 'r-node-class-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Class Components"
    },
    position: { x: 450, y: 600 }
  },
  {
    id: 'r-node-component-lifecycle',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    // sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Component Life Cycle"
    },
    position: { x: 1600, y: 400 }
  },
  {
    id: 'r-node-composition-inheritance',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    // sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Composition vs Inheritance"
    },
    position: { x: 1650, y: 460 }
  },
  {
    id: 'r-node-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Basic Hooks"
    },
    position: { x: 1630, y: 520 }
  },
  {
    id: 'r-node-lists',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Lists And Keys"
    },
    position: { x: 1560, y: 570 }
  },
  {
    id: 'r-node-useeffect',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    // sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "useEffect"
    },
    position: { x: 2000, y: 540 }
  },
  {
    id: 'r-node-usestate',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    // sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "useState"
    },
    position: { x: 1950, y: 600 }
  },
  {
    id: 'r-node-advanced',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: {
      biggerVariable: true,
      bottomSource: true,
      label: "Advanced"
    },
    position: { x: 1200, y: 700 }
  },
  {
    id: 'r-node-context',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Context"
    },
    position: { x: 800, y: 700 }
  },
  {
    id: 'r-node-refs',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Refs"
    },
    position: { x: 750, y: 760 }
  },
  {
    id: 'r-node-hooks-adv',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Hooks"
    },
    position: { x: 780, y: 820 }
  },
  {
    id: 'r-node-render-props',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Render Props"
    },
    position: { x: 840, y: 870 }
  },
  {
    id: 'r-node-own-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Own Hooks"
    },
    position: { x: 400, y: 840 }
  },
  {
    id: 'r-node-common-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: ["Common Hooks", "useCallBack", "useMemo", 'useReducer', "useContext"]
    },
    position: { x: 450, y: 900 }
  },
  // {
  //   id: 'r-node-portal',
  //   style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
  //   type: "NodeText",
  //   selectable: false,
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  //   data: {
  //     label: "Portal"
  //   },
  //   position: { x: 1600, y: 700 }
  // },
  {
    id: 'r-node-error-boundaries',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Error Boundaries"
    },
    position: { x: 1650, y: 760 }
  },
  {
    id: 'r-node-fiber',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "Fiber Architecture"
    },
    position: { x: 1630, y: 820 }
  },
  {
    id: 'r-node-order',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "High Order Components"
    },
    position: { x: 1560, y: 870 }
  },
  {
    id: 'r-node-ecosystem',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: {
      biggerVariable: true,
      bottomSource: true,
      label: "Ecosystem"
    },
    position: { x: 1200, y: 1000 }
  },


  {
    id: 'r-node-router',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Router"
    },
    position: { x: 880, y: 1040 }
  },
  {
    id: 'r-node-react-router',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Top,
    data: {
      label: "React Router"
    },
    position: { x: 640, y: 1100 }
  },

  {
    id: 'r-node-ssg',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "SSG"
    },
    position: { x: 960, y: 1150 }
  },
  {
    id: 'r-node-ssr',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    data: {
      label: "SSR",
      noTarget: true
    },
    position: { x: 960, y: 1200 }
  },
  {
    id: 'r-node-next',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: "NEXT JS"
    },
    position: { x: 630, y: 1175 }
  },
  {
    id: 'r-node-api',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Right,
    data: {
      label: "API",
      bottomSource: true
    },
    position: { x: 990, y: 1280 }
  },
  {
    id: 'r-node-reactquery',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: "React Query"
    },
    position: { x: 800, y: 1330 }
  },
  {
    id: 'r-node-axios',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: "Axios"
    },
    position: { x: 860, y: 1380 }
  },
  {
    id: 'r-node-styling',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Left,
    data: {
      bottomSource: true,
      label: "Styling"
    },
    position: { x: 1340, y: 1140 }
  },
  {
    id: 'r-node-chakra',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Chakra UI"
    },
    position: { x: 1540, y: 1240 }
  },
  {
    id: 'r-node-material',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "Material UI"
    },
    position: { x: 1510, y: 1320 }
  },
];

export default InitialElementsReactJs;