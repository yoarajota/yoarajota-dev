import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Yj from "../public/components/yj";
import { GiHamburgerMenu } from 'react-icons/gi';
import Nodes from "../public/components/nodes.jsx";
import NodeHead from "../public/components/nodes/nodeHead"

function Tec() {
    const [offset, setOffset] = useState(0);
    const { isOpen, onToggle } = useDisclosure()
    const route = useRouter();
    const [innerWidth, setInnerWidth] = useState('')

    useEffect(() => {
        setInnerWidth(parseInt(window.innerWidth * 0.8))

        setTimeout(() => {
            onToggle()
            window.addEventListener('scroll', (event) => {
                onToggle()
                route.push('/homepage')
            });
        }, 1000)
    }, []);

    useEffect(() => {
        console.log(innerWidth)
    }, [innerWidth])

    return (
        <>
            <Box vh='121vh'>
                <Slide in={isOpen} direction='top'>
                    <Box h='100%'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Box m='20px'>
                                <GiHamburgerMenu size='40' color='#D99E6A' />
                            </Box>
                            <Box m='20px'>
                                <Yj />
                            </Box>
                        </Box>
                        <Center w='100%'>
                            <Box w={`${innerWidth}px`} position='relative' h='700px' m='auto 0' width='70%'>
                                <Nodes />
                            </Box>
                        </Center>
                    </Box>
                </Slide>
            </Box>

            <style jsx global>
                {`
                body {
                    margin: 0;
                    background-color: #0D0D0D;
                }
                
                `}
            </style>
        </>
    );
}

export default Tec;