import React, { useCallback, useEffect, useState } from "react";

import ReactFlow, {
    addEdge,
    ReactFlowProvider,
    useNodesState,
    useEdgesState
} from "react-flow-renderer";

import initialElements from "./initial-elements";
import Edge from './edge'
import { Box, Text } from "@chakra-ui/react";

const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}


const Nodes = () => {

    const [name, setName] = useState("")
    const [elements, setElements, onElementsChange] = useNodesState(initialElements);
    const [edge, setEdge, onEdgeChange] = useEdgesState(Edge)
    const onLoad = (reactFlowInstance) => {
        console.log("flow loaded:", reactFlowInstance);
        reactFlowInstance.fitView();
    };
    useEffect(() => {
        console.log(elements)
    }, [elements])

    const cNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            style: { padding: '0', background: 'none' },
            type: "default",
            sourcePosition: 'left',
            targetPosition: 'right',
            data: {
                label: (
                    <>
                        <Box m='0' border='4px solid #4B4453' borderRadius='8px' background='#0D0D0D'>
                            <Text m='0' p='5px' fontFamily='Ubuntu' fontSize='24px' color='#D99E6A'>
                                {name}
                            </Text>
                        </Box>
                    </>
                )
            },
            position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
        }))
    }

    const onConnect = useCallback(
        (params) => setEdge((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
        []
    );

    return (
        <>
            <div>
                <input type='text' onChange={e => setName(e.target.value)} />
                <input type="button" onClick={cNode} />
            </div>
            <ReactFlowProvider >
                <ReactFlow
                    onNodesChange={onElementsChange}
                    onEdgesChange={onEdgeChange}
                    onLoad={onLoad}
                    defaultPosition={[100, 100]}
                    onConnect={onConnect}
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
