import React from "react";
import { Node, Position } from "reactflow";
import LaravelSvg from "../public/images/laravelSvg";
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
    id: 'node-fundamental',
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
    id: 'node-controllers',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label:
        "Controllers"
    },
    position: { x: 800, y: 400 }
  },
  {
    id: 'node-blade',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label:
        "Blade"
    },
    position: { x: 750, y: 460 }
  },
  {
    id: 'node-routing',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Routing"
    },
    position: { x: 780, y: 520 }
  },
  {
    id: 'node-auth',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Auth Basics"
    },
    position: { x: 840, y: 570 }
  },
  {
    id: 'node-route-parameters',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Parameters"
    },
    position: { x: 400, y: 540 }
  },
  {
    id: 'node-route-groups',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Groups"
    },
    position: { x: 450, y: 600 }
  },
  {
    id: 'node-crud',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "CRUD"
    },
    position: { x: 1600, y: 400 }
  },
  {
    id: 'node-forms',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Forms, Validation and Form Requests"
    },
    position: { x: 1500, y: 340 }
  },
  {
    id: 'node-relationships',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Relationships"
    },
    position: { x: 1650, y: 460 }
  },
  {
    id: 'node-database',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "Database"
    },
    position: { x: 1430, y: 515 }
  },
  {
    id: 'node-mvc',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "MVC"
    },
    position: { x: 1560, y: 570 }
  },
  {
    id: 'node-migrations',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Migrations"
    },
    position: { x: 2000, y: 540 }
  },

  {
    id: 'node-relations',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: ["belongsTo", "hasMany", "belongsToManytions"]
    },
    position: { x: 2000, y: 340 }
  },
  {
    id: 'node-seeders',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Seeders"
    },
    position: { x: 1950, y: 600 }
  },
  {
    id: 'node-advanced',
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
    id: 'node-middleware',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Middleware"
    },
    position: { x: 800, y: 700 }
  },
  {
    id: 'node-route-bindings',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Route Model Binding"
    },
    position: { x: 750, y: 760 }
  },
  {
    id: 'node-hooks-adv',
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
    id: 'node-render-props',
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
    id: 'node-own-hooks',
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
    id: 'node-common-hooks',
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
  //   id: 'node-portal',
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
    id: 'node-error-boundaries',
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
    id: 'node-fiber',
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
    id: 'node-order',
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
    id: 'node-ecosystem',
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
    id: 'node-router',
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
    id: 'node-react-router',
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
    id: 'node-ssg',
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
    id: 'node-ssr',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    // targetPosition: undefined,
    data: {
      label: "SSR"
    },
    position: { x: 960, y: 1200 }
  },
  {
    id: 'node-next',
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
    id: 'node-api',
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
    id: 'node-reactquery',
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
    id: 'node-axios',
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
    id: 'node-styling',
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
    id: 'node-chakra',
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
    id: 'node-material',
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

export default InitialElementsLaravel;