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

const Nodes = () => {
  const onLoad = (reactFlowInstance: ReactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  const nodeTypes = useMemo(() => ({ NodeText: NodeText, NodeHead: NodeHead }), []);

  return (
    <>
      <ReactFlowProvider>
        <ReactFlow
          className="react-flow-provider"
          onInit={onLoad}
          defaultPosition={[100, 100]}
          maxZoom={20}
          nodes={InitialElementsReactJs}
          snapToGrid={true}
          snapGrid={[16, 16]}
          connectionLineType={ConnectionLineType.Bezier}
          edges={InitialEdgesReactJs}
          nodeTypes={nodeTypes}
        />
      </ReactFlowProvider>
      {/* <ReactFlowProvider>
          <ReactFlow
            nodeTypes={nodeTypes}
            className="react-flow-provider"
            onInit={onLoad}
            defaultPosition={[100, 100]}
            connectionLineType={ConnectionLineType.Bezier}
            maxZoom={20}
            nodes={InitialElementsLaravel}
            snapToGrid={true}
            snapGrid={[16, 16]}
            edges={InitialEdgesLaravel}
          />
        </ReactFlowProvider> */}
    </>
  );
};

export default Nodes;
