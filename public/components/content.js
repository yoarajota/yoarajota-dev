import { Box, Heading, Center, Image, Text } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Imagem from './images/Teste.jpg';
import Skills from "./skills";
import { useEffect, useRef, useState } from "react";
import { BiInfoCircle } from 'react-icons/bi';

function Content() {
    const constraintsRef = useRef(null);

    // addEventListener("location", () => { })

    function handleInfo(e, info) {
        if ((info.point.x > window.innerWidth * 0.75) && (info.point.y > window.innerHeight * 0.95)) {
            console.log(info.point.x, window.innerWidth * 0.75);
        }
    }

    return (
        <>
            <Box w={'100vw'}>
                <Center w='90vw' m='0 auto'>
                    <Box w='100vw'>
                        <Heading fontSize='4.7em' m='10px 0 30px 0' css={{
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            'background-color': '#D99E6A'
                        }} textAlign='left'>
                            aaaaaaaaaa
                        </Heading>
                        <Box display={'flex'}>
                            <Box w='20%' h='80vh' minW={'310px'} textAlign='center'>
                                <Image src={'https://bit.ly/dan-abramov'}
                                    m='0 auto'
                                    borderRadius='199'
                                    border={'6px solid rgb(75, 68, 83)'}
                                    boxSize='200px' />
                                <Skills />
                            </Box>
                            <Box w='80%' h='80vh' padding={'20px 50px'}>
                                <Box w='100%' textAlign='center'>
                                    <Heading fontSize='3em' m='0px' color={'#737373'}>
                                        <BiInfoCircle />
                                    </Heading>
                                </Box>
                                <Box w='80%' m='0 auto'>
                                    <Text color='#737373' fontSize='1.8em' fontFamily='Ubuntu' fontWeight='400'>
                                        Olá! 😁 <br />
                                        Sou o João Vítor Basso Sberse, tenho 19 anos e sou desenvolvedor.
                                    </Text>
                                    <motion.div className="container" ref={constraintsRef}>
                                        <Box w='140px' h='140px' backgroundColor='transparent' position='absolute' border='1px solid #737373' borderRight='none' borderBottom='none' borderRadius='9px' bottom='-6' right='-6' display='flex' justifyContent='center' alignItems='center'>
                                            <BiInfoCircle size='40'/>
                                        </Box>
                                        <motion.div className="item" drag dragConstraints={constraintsRef} onDragEnd={(event, info) => handleInfo(event, info)} />
                                        <motion.div className="item" drag dragConstraints={constraintsRef} />
                                    </motion.div>
                                </Box>
                            </Box>
                        </Box>
                        {/* <Box w='100%' h='100vh'>

                        </Box> */}
                    </Box>
                </Center>

            </Box>
            <style jsx global>
                {`
.container {
    width: 100%;
    height: 500px;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 30px;
    position: relative;
    border: 1px solid #737373;  
  }
  
  .item {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: inherit;
  }

`}
            </style>
        </>
    )
}

export default Content;