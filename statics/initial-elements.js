import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactSvg from "../public/images/reactsvg";
import NodeHead from "../public/components/nodes/nodeHead";
import NodePoint from "../public/components/nodes/nodePoints";
import NodeText from "../public/components/nodes/nodeText";

export default [

  {
    id: "node-head",
    type: "input",
    sourcePosition: "bottom",
    selectable: false,
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    data: {
      label: (
        <>
          <NodeHead xp='1' lvl='2'>
            React JS
            <ReactSvg />
          </NodeHead>
        </>
      )
    },
    position: { x: 1200, y: 100 }
  },
  {
    id: 'node-fundamental',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: {
      label: (
        <NodeText title customFontSize='28px'>
          Fundamental
        </NodeText>
      )
    },
    position: { x: 1200, y: 400 }
  },
  {
    id: 'node-jsx',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          JSX
        </NodeText>
      )
    },
    position: { x: 800, y: 400 }
  },
  {
    id: 'node-create-react-app',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Create React
        </NodeText>
      )
    },
    position: { x: 750, y: 460 }
  },
  {
    id: 'node-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'default',
    selectable: false,
    sourcePosition: 'left',
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Components
        </NodeText>
      )
    },
    position: { x: 780, y: 520 }
  },
  {
    id: 'node-props-state',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Props vs State
        </NodeText>
      )
    },
    position: { x: 840, y: 570 }
  },
  {
    id: 'node-functional-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Functional Components
        </NodeText>
      )
    },
    position: { x: 400, y: 540 }
  },
  {
    id: 'node-class-components',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Class Components
        </NodeText>
      )
    },
    position: { x: 450, y: 600 }
  },
  {
    id: 'node-component-lifecycle',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Component Life Cycle
        </NodeText>
      )
    },
    position: { x: 1600, y: 400 }
  },
  {
    id: 'node-composition-inheritance',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Composition vs Inheritance
        </NodeText>
      )
    },
    position: { x: 1650, y: 460 }
  },
  {
    id: 'node-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'default',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Basic Hooks
        </NodeText>
      )
    },
    position: { x: 1630, y: 520 }
  },
  {
    id: 'node-lists',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Lists And Keys
        </NodeText>
      )
    },
    position: { x: 1560, y: 570 }
  },
  {
    id: 'node-useeffect',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          useEffect
        </NodeText>
      )
    },
    position: { x: 2000, y: 540 }
  },
  {
    id: 'node-usestate',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          useState
        </NodeText>
      )
    },
    position: { x: 1950, y: 600 }
  },






  {
    id: 'node-advanced',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: {
      label: (
        <NodeText title customFontSize='28px'>
          Advanced
        </NodeText>
      )
    },
    position: { x: 1200, y: 700 }
  },
  {
    id: 'node-context',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Context
        </NodeText>
      )
    },
    position: { x: 800, y: 700 }
  },
  {
    id: 'node-refs',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Refs
        </NodeText>
      )
    },
    position: { x: 750, y: 760 }
  },
  {
    id: 'node-hooks-adv',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'default',
    selectable: false,
    sourcePosition: 'left',
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Hooks
        </NodeText>
      )
    },
    position: { x: 780, y: 820 }
  },
  {
    id: 'node-render-props',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Render Props
        </NodeText>
      )
    },
    position: { x: 840, y: 870 }
  },
  {
    id: 'node-own-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Own Hooks
        </NodeText>
      )
    },
    position: { x: 400, y: 840 }
  },
  {
    id: 'node-common-hooks',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Common Hooks  <br />
          <br />
          useCallBack <br />
          useMemo <br />
          useReducer <br />
          useContext <br />
        </NodeText>
      )
    },
    position: { x: 450, y: 900 }
  },
  {
    id: 'node-portal',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Portal
        </NodeText>
      )
    },
    position: { x: 1600, y: 700 }
  },
  {
    id: 'node-error-boundaries',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Error Boundaries
        </NodeText>
      )
    },
    position: { x: 1650, y: 760 }
  },
  {
    id: 'node-fiber',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Fiber Architecture
        </NodeText>
      )
    },
    position: { x: 1630, y: 820 }
  },
  {
    id: 'node-order',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: 'output',
    selectable: false,
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          High Order Components
        </NodeText>
      )
    },
    position: { x: 1560, y: 870 }
  },








  {
    id: 'node-ecosystem',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: {
      label: (
        <NodeText title customFontSize='28px'>
          Ecosystem
        </NodeText>
      )
    },
    position: { x: 1200, y: 1000 }
  },


  {
    id: 'node-router',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'left',
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Router
        </NodeText>
      )
    },
    position: { x: 880, y: 1040 }
  },
  {
    id: 'node-react-router',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'top',
    data: {
      label: (
        <NodeText>
          React Router
        </NodeText>
      )
    },
    position: { x: 640, y: 1100 }
  },

  {
    id: 'node-ssg',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'left',
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          SSG
        </NodeText>
      )
    },
    position: { x: 960, y: 1150 }
  },
  {
    id: 'node-ssr',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "input",
    selectable: false,
    sourcePosition: 'left',
    data: {
      label: (
        <NodeText>
          SSR
        </NodeText>
      )
    },
    position: { x: 960, y: 1200 }
  },
  {
    id: 'node-next',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          NEXT JS
        </NodeText>
      )
    },
    position: { x: 630, y: 1175 }
  },




  {
    id: 'node-api',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'bottom',
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          API
        </NodeText>
      )
    },
    position: { x: 990, y: 1280 }
  },
  {
    id: 'node-reactquery',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          React Query
        </NodeText>
      )
    },
    position: { x: 800, y: 1330 }
  },
  {
    id: 'node-axios',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'right',
    data: {
      label: (
        <NodeText>
          Axios
        </NodeText>
      )
    },
    position: { x: 860, y: 1380 }
  },




  
  {
    id: 'node-styling',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "default",
    selectable: false,
    sourcePosition: 'bottom',
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Styling
        </NodeText>
      )
    },
    position: { x: 1340, y: 1140 }
  },
  {
    id: 'node-chakra',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Chakra UI
        </NodeText>
      )
    },
    position: { x: 1540, y: 1240 }
  },
  {
    id: 'node-material',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "output",
    selectable: false,
    targetPosition: 'left',
    data: {
      label: (
        <NodeText>
          Material UI
        </NodeText>
      )
    },
    position: { x: 1510, y: 1320 }
  },
];
