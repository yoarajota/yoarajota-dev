import { Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ReactFlow, { useNodesState, useEdgesState } from 'react-flow-renderer';


const Nodes = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);

    useEffect(() => {
        setNodes([
            {
                id: '1',
                type: 'input',
                data: { label: 'An input node' },
                position: { x: 0, y: 50 },
                sourcePosition: 'right',
            },
            {
                id: '2',
                type: 'selectorNode',
                data: { label: 'A selector node' },
                style: { border: '1px solid #777', padding: 10 },
                position: { x: 300, y: 50 },
            },
            {
                id: '3',
                type: 'output',
                data: { label: 'Output A' },
                position: { x: 450, y: 25 },
                targetPosition: 'left',
            },
            {
                id: '4',
                type: 'output',
                data: { label: 'Output B' },
                position: { x: 450, y: 100 },
                targetPosition: 'left',
            },
        ]);


    }, []);


    return (
        <>
            <ReactFlow nodes={nodes} style={{ width: "100%", height: "100%" }} > 
            
            AA
            </ReactFlow>
        </>
    )
}

export default Nodes;