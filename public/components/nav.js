import { Box, Text } from "@chakra-ui/react";
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";

const Nav = () => {
    return (
        <>

            <Box position='fixed' zIndex='4' alignItems={'center'} justifyContent={'space-between'} display={'flex'} w={'100%'}>
                <Box marginLeft='10px'>
                    <Text color='#D99E6A'>
                        Yoarajota
                    </Text>
                </Box>
                <Box marginRight='10px'>
                    <Text color='#D99E6A'>
                        Yoarajota
                    </Text>
                </Box>
            </Box>
        </>
    );
}

export default Nav;