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
                    <motion.box
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

            <style jsx global>{`
        .lf {
            width: 210px;
            height: 30px;
            background-color: rgb(75, 68, 83);
            display: flex;
            border: 1px solid #0D0D0D;
            border-radius: 4px;
            z-index: 0;
        }
        
        .lf:not(:last-child) {
            margin-bottom: 10px;
        }

        .louter {
            z-index: 3;
            background-color: blue;
        }
        
        .lfs {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }
        
        .lfs2 {
            width: 33.3333333%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }
        
        .lfs2:not(:last-child) {
            border-right: 4px solid #0D0D0D;
        }
        
        .ll {
            margin-top: 1px;
            background-color: rgb(195, 74, 54);
            height: 28px;
            overflow: hidden;
            opacity: 0.5;
            border-radius: 4px 0 0 4px;
            position: absolute;
        }
        
        .lfs:not(:last-child) {
            border-right: 4px solid #0D0D0D;
        }

        .lt {
            margin: 10px 0;
        }
        
        .lh {
            text-align: center;
            font-size: 24px;
            letter-spacing: 0.4px;
            font-weight: 500;
        }
        
        .textoGeral2{
            font-family: 'Prompt', sans-serif;
            color: #0D0D0D;
            font-weight: 600;
        }

        .textoGeral {
            font-family: 'Prompt', sans-serif;
            color: #D99E6A;
        }
        `}</style>

        </>
    );
}

export default Levelers;