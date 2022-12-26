// import { Box, Heading, Center, Image, Text, useDisclosure, Slide, Alert, AlertIcon, AlertTitle, AlertDescription, Stack, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
// import { motion, useScroll } from "framer-motion";
// import Skills from "./skills";
// import { useEffect, useRef, useState } from "react";
// import { BiInfoCircle } from 'react-icons/bi';
// import { GrReactjs } from 'react-icons/gr';
// import SlideFromLeft from "./animations/slideleft";

// function Content(props) {
//     const constraintsRef = useRef(null);
//     const { isOpen, onToggle } = useDisclosure()

//     useEffect(() => {
//         console.log(props.home)
//         if (props.home) {
//             onToggle()
//         }
//     }, [props.home])

//     function handleInfo() {
//         onToggle(false)
//         setTimeout(() => {
//             props.setHome(false)
//             props.setInfo(true)
//         }, 2000);
//     }


//     return (
//         <>
//             {props.home && (
//                 <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
//                     <Box w={'100vw'} >
//                         <Center w='90vw' m='0 auto'>
//                             <Box w='100vw'>
//                                 <SlideFromLeft delay={1.1}>
//                                     <Heading fontSize='4.7em' m='20px 0 30px 0' css={{
//                                         '-webkit-background-clip': 'text',
//                                         '-webkit-text-fill-color': 'transparent',
//                                         'background-color': '#D99E6A'
//                                     }} textAlign='left'>
//                                         ASKLJDASA
//                                     </Heading>
//                                 </SlideFromLeft>
//                                 <Box display={'flex'}>
//                                     <Box w='20%' h='80vh' minW={'310px'} textAlign='center' padding={'20px 0 0 0'}>
//                                         <SlideFromLeft delay={1.3}>
//                                             <Image src={'https://bit.ly/dan-abramov'}
//                                                 m='15px auto'
//                                                 borderRadius='199'
//                                                 border={'6px solid rgb(75, 68, 83)'}
//                                                 boxSize='200px' />
//                                         </SlideFromLeft>
//                                         <Skills />
//                                     </Box>
//                                     <Box w='80%' h='80vh' padding={'20px 50px'}>
//                                         <Center w='100%'>
//                                             <Heading fontSize='3em' m='0px' color={'#737373'}>
//                                                 <BiInfoCircle />
//                                             </Heading>
//                                         </Center>
//                                         <Box w='80%' m='0 auto'>
//                                             <Text color='#737373' fontSize='1.8em' fontFamily='Ubuntu' fontWeight='400'>
//                                                 Olá! 😁🌹 <br />
//                                                 Sou o João Vítor Basso Sberse, tenho 19 anos e sou desenvolvedor.
//                                             </Text>
//                                             <Box m='0 20px 0 0' color='#737373' textAlign='right' fontFamily='Prompt' fontWeight='500' fontStyle='italic' opacity='0.3'>
//                                                 Selecione e arraste até o local indicado para mais informações!
//                                             </Box>
//                                             <motion.div className="container" ref={constraintsRef}>
//                                                 <Box w='140px' h='140px' backgroundColor='transparent' position='absolute' border='1px solid #737373' borderRight='none' borderBottom='none' borderRadius='9px' bottom='-6' right='-6' display='flex' justifyContent='center' alignItems='center'>
//                                                     <Box m='0 16px 16px 0'>
//                                                         <BiInfoCircle color='#737373' size='40' />
//                                                     </Box>
//                                                 </Box>


//                                                 <motion.div className="item" drag dragConstraints={constraintsRef} onDragEnd={(event, info) => {
//                                                     if ((info.point.x > window.innerWidth * 0.80) && (info.point.y > window.innerHeight * 0.90))
//                                                         handleInfo()
//                                                 }}>
//                                                     <Box>
//                                                         <Stat textAlign='center' color='#61dafb'>
//                                                             <Center>
//                                                                 <GrReactjs size='54' />
//                                                             </Center>
//                                                             <StatLabel fontSize='1.5rem'>React JS</StatLabel>
//                                                         </Stat>
//                                                     </Box>
//                                                 </motion.div>


//                                             </motion.div>
//                                         </Box>
//                                     </Box>
//                                 </Box>
                              
//                             </Box>
//                         </Center>

//                     </Box>
//                 </Slide >
//             )
//             }
//             <style jsx global>
//                 {`
// .container {
//     width: 100%;
//     height: 500px;
//     display: flex;
//     place-content: center;
//     place-items: center;
//     overflow: hidden;
//     border-radius: 30px;
//     position: relative;
//     border: 1px solid #737373;  
//   }
  

//   .rootcontent {
//       display: {display} ? 'block' : 'none';
//   }

// `}
//             </style>
//         </>
//     )
// }

// export default Content;