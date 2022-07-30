import { Box, Text } from "@chakra-ui/react";
import React from "react";
import NodeHead from "./nodes/nodeHead";
import NodePoint from "./nodes/nodePoints";
import NodeText from "./nodes/nodeText";

export default [

  {
    id: "node-head",
    type: "input",
    selectable: false,
    style: { padding: '0', minWidth: '220px', background: 'none', border: 'none' },
    data: {
      label: (
        <>
          <NodeHead xp='1' lvl='2'>
            React JS
          </NodeHead>
        </>
      )
    },
    position: { x: 1200, y: 0 }
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
        <NodeText>
          Fundamental
        </NodeText>
      )
    },
    position: { x: 1200, y: 400 }
  },
  {
    id: 'node-jsx',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
    type: "default",
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
];
