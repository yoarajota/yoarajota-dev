import { Center, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Levelers(props) {
    const xp = props.xp * 40.5;
    const lvl = props.lvl * 67.5;
    const title = props.title;

    const variants = {
        i: {
            width: 0,
            display: "none",
        },

        a: {
            display: "block",
            width: xp ?? lvl,
        },

        a2: {
            display: "block",
            width: lvl,
        },
    }

    const variants2 = {
        i: {
            x: 0,
            display: "none",
        },

        a: {
            display: "block",
            x: 120
        },

    }

    return (
        <>
            <Box maxW={'210px'} m='0 auto'>
                <Text fontFamily={'Prompt'} fontSize='20px' m='0px' className="textoGeral">
                    {title}
                </Text>
                {/* <Box w={'100%'} textAlign={'left'} fontSize='18px' fontWeight={400}>Anos</Box> */}
                <Box marginBottom={'10px'}>
                    <motion.div
                        initial='i'
                        animate='a'
                        variants={variants}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="ll" />
                    <Box zIndex={3} w='210px' backgroundColor='transaperent' position='absolute' h='30px' display='flex'>
                        <Box className="lfs">
                        </Box>
                        <Box className="lfs">
                        </Box>
                        <Box className="lfs">
                        </Box>
                        <Box className="lfs">
                        </Box>
                        <Box className="lfs">
                        </Box>
                    </Box>

                    <Box className="lf">
                        <Box className="lfs textoGeral2"> 1
                        </Box>
                        <Box className="lfs textoGeral2"> 2
                        </Box>
                        <Box className="lfs textoGeral2"> 3
                        </Box>
                        <Box className="lfs textoGeral2"> 4
                        </Box>
                        <Box className="lfs textoGeral2"> 5
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    );
}

export default Levelers;