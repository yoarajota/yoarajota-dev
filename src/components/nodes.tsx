import React, { useCallback, useEffect, useMemo, useState } from "react";

import ReactFlow, {
  ReactFlowInstance,
  ReactFlowProvider,
  ConnectionLineType
} from "react-flow-renderer";

import InitialElementsReactJs from "../../statics/initial-elements-react-js";
import InitialEdgesReactJs from '../../statics/initial-edges-react-js'
import InitialElementsLaravel from "../../statics/inital-elements-laravel"
import InitialEdgesLaravel from '../../statics/inital-edges-laravel'
import NodeText from "./nodes/nodeText";
import NodeHead from "./nodes/nodeHead";
import { Nodes } from "asset/types";

const Nodes = ({ tech }: Nodes) => {
  const onLoad = (reactFlowInstance: ReactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  const nodeTypes = useMemo(() => ({ NodeText: NodeText, NodeHead: NodeHead }), []);

  const nodes = tech === 1 ? InitialElementsReactJs : InitialElementsLaravel; 
  const edges = tech === 1 ? InitialEdgesReactJs : InitialEdgesLaravel; 
  
  return (
    <>
      <ReactFlowProvider>
        <ReactFlow
          className="react-flow-provider"
          onInit={onLoad}
          defaultPosition={[100, 100]}
          maxZoom={20}
          nodes={nodes}
          snapToGrid={true}
          snapGrid={[16, 16]}
          connectionLineType={ConnectionLineType.Bezier}
          edges={edges}
          nodeTypes={nodeTypes}
        />
      </ReactFlowProvider>
    </>
  );
};

export default Nodes;
