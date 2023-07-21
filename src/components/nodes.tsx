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

const Nodes = () => {
  const onLoad = (reactFlowInstance: ReactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  const nodeTypes = useMemo(
    () => ({ NodeText: NodeText, NodeHead: NodeHead }),
    []
  );

  const { allNodes, allEdges } = useMemo(() => {
    for (let item of InitialElementsLaravel) {
      item.position.y += 340;
      item.id = "l-" + item.id;
    }

    for (let item of InitialElementsReactJs) {
      item.position.y -= 300;
    }

    for (let item of InitialEdgesLaravel) {
      item.source = "l-" + item.source;
      item.target = "l-" + item.target;
    }

    return {
      allNodes: InitialElementsReactJs.concat(InitialElementsLaravel),
      allEdges: InitialEdgesReactJs.concat(InitialEdgesLaravel),
    };
  }, [InitialElementsLaravel, InitialEdgesLaravel]);

  return (
    <ReactFlowProvider>
      <ReactFlow
        className="react-flow-provider"
        onInit={onLoad}
        defaultPosition={[100, 100]}
        maxZoom={1}
        nodes={allNodes}
        connectionLineType={ConnectionLineType.Bezier}
        edges={allEdges}
        nodeTypes={nodeTypes}
        zoomOnDoubleClick={false}
      />
    </ReactFlowProvider>
  );
};

export default Nodes;
