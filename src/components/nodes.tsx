import React, { useEffect, useMemo } from "react";
import ReactFlow, {
  ReactFlowInstance,
  ReactFlowProvider,
  ConnectionLineType,
} from "react-flow-renderer";

import InitialElementsReactJs from "../../statics/initialElementsReactJs";
import InitialEdgesReactJs from "../../statics/initialEdgesReactJs";
import InitialElementsLaravel from "../../statics/initalElementsLaravel";
import InitialEdgesLaravel from "../../statics/initalEdgesLaravel";
import NodeText from "./nodes/nodeText";
import NodeHead from "./nodes/nodeHead";
import InitialElementsExtra from "../../statics/initialElementsExtra";

const Nodes = () => {
  const onLoad = (reactFlowInstance: ReactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  const nodeTypes = useMemo(
    () => ({ NodeText: NodeText, NodeHead: NodeHead }),
    []
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        className="react-flow-provider"
        onInit={onLoad}
        defaultPosition={[100, 100]}
        maxZoom={1}
        nodes={InitialElementsReactJs.concat(InitialElementsLaravel).concat(InitialElementsExtra)}
        connectionLineType={ConnectionLineType.Bezier}
        edges={InitialEdgesReactJs.concat(InitialEdgesLaravel)}
        nodeTypes={nodeTypes}
        zoomOnDoubleClick={false}
      />
    </ReactFlowProvider>
  );
};

export default Nodes;
