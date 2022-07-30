import React, { useCallback, useEffect, useState } from "react";
import * as util from 'util'

import ReactFlow, {
    addEdge,
    ReactFlowProvider,
    useNodesState,
    useEdgesState
} from "react-flow-renderer";

import initialElements from "./initial-elements";
import Edge from './initial-edges'
import { Box, Text } from "@chakra-ui/react";

const Nodes = () => {
    const [name, setName] = useState("")
    const [elements, setElements, onElementsChange] = useNodesState(initialElements);
    const [edge, setEdge, onEdgeChange] = useEdgesState(Edge)
    const onLoad = (reactFlowInstance) => {
        reactFlowInstance.fitView();
    };
    return (
        <>
            <ReactFlowProvider position='absoltue'>
                <ReactFlow
                    onNodesChange={onElementsChange}
                    onEdgesChange={onEdgeChange}
                    onInit={onLoad}
                    defaultPosition={[100, 100]}
                    connectionLineType='bezier'
                    maxZoom={20}
                    nodes={elements}
                    snapToGrid={true}
                    snapGrid={[16, 16]}
                    edges={edge}
                />
            </ReactFlowProvider>
        </>
    );
};

export default Nodes;
