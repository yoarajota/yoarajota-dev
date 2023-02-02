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
    id: 'node-database-adv',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Database Advanced"
    },
    position: { x: 780, y: 820 }
  },
  {
    id: 'node-file',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "File Uploads"
    },
    position: { x: 890, y: 880 }
  },
  {
    id: 'node-debug',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Debug"
    },
    position: { x: 930, y: 950 }
  },
  {
    id: 'node-mail',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Mailables and Mail Facade, etc"
    },
    position: { x: 530, y: 970 }
  },
  {
    id: 'node-query',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Eloquent Query Scopes"
    },
    position: { x: 400, y: 840 }
  },
  {
    id: 'node-collections',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Eloquent Collections"
    },
    position: { x: 450, y: 900 }
  },
  {
    id: 'node-accessors',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    sourcePosition: undefined,
    data: {
      label: "Eloquent Accessors and Mutators"
    },
    position: { x: 450, y: 900 }
  },
  {
    id: 'node-api',
    style: { padding: '0',  background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: {
      label: "API"
    },
    position: { x: 1360, y: 775 }
  },
  {
    id: 'node-error',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "API Error Handling and Status Codes"
    },
    position: { x: 1650, y: 700 }
  },
  {
    id: 'node-apps',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Postman, Insomnia, ThudnerClient"
    },
    position: { x: 1700, y: 760 }
  },
  {
    id: 'node-api-routes',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "API Routes and Controllers"
    },
    position: { x: 1680, y: 820 }
  },
  {
    id: 'node-resources',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "API Eloquent Resources"
    },
    position: { x: 1610, y: 880 }
  },
  {
    id: 'node-try',
    style: { padding: '0', minWidth: '420px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "Try-Catch and Laravel Exceptions"
    },
    position: { x: 1460, y: 940 }
  },
  {
    id: 'node-mid',
    style: { padding: '0', minWidth: '260px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: {
      biggerVariable: true,
      bottomSource: true,
      label: "Mid Level"
    },
    position: { x: 1200, y: 1100 }
  },


  {
    id: 'node-observers',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "Model"
    },
    position: { x: 880, y: 1140 }
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
    position: { x: 640, y: 1200 }
  },

  {
    id: 'node-eloquent-features',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    data: {
      label: "All Eloquent Features"
    },
    position: { x: 960, y: 1250 }
  },
  {
    id: 'node-raw',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Left,
    // targetPosition: undefined,
    data: {
      label: "Raw Database Queries"
    },
    position: { x: 960, y: 1300 }
  },
  {
    id: 'node-jobs',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: "Jobs and Queues"
    },
    position: { x: 630, y: 1275 }
  },
  {
    id: 'node-observers',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Right,
    data: {
      label: "Model Observers",
      bottomSource: true
    },
    position: { x: 990, y: 1380 }
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
    position: { x: 800, y: 1430 }
  },
  {
    id: 'node-solid',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Right,
    data: {
      label: "SOLID Code"
    },
    position: { x: 860, y: 1480 }
  },
  {
    id: 'node-caching',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Left,
    data: {
      bottomSource: true,
      label: "Caching"
    },
    position: { x: 1340, y: 1240 }
  },
  {
    id: 'node-file-api',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    data: {
      label: "Upload Files via API"
    },
    position: { x: 1540, y: 1340 }
  },
  {
    id: 'node-only-api',
    style: { padding: '0', minWidth: '280px', background: 'none', border: 'none' },
    type: "NodeText",
    selectable: false,
    targetPosition: Position.Left,
    sourcePosition: undefined,
    data: {
      label: "Only-API Projects"
    },
    position: { x: 1510, y: 1420 }
  },
];

export default InitialElementsLaravel;
