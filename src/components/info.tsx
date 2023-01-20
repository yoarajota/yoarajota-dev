import { Box, Heading, Center, Image, Text, Button, useDisclosure, Slide } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Skills from "./skills";
import { useEffect, useRef, useState } from "react";
import { BiInfoCircle } from 'react-icons/bi';
import keyable from "../../src/api/assset/types";

function Info(props: keyable) {
    const { isOpen, onToggle } = useDisclosure()

    useEffect(() => {
        if (props.info) {
            onToggle()
        }
    }, [props.info])

    function handleClick() {
        onToggle()
        setTimeout(() => {
            props.setHome(true)
            props.setInfo(false)
        }, 2000);
    }

    return (
        <>
            {props.info && (
                <Slide direction='right' in={isOpen} style={{ zIndex: 10 }}>
                    <Box background={'white'} w='100%' h='100px'>
                        <Button onClick={() => handleClick()}>
                            aaaaaaaaaaaaaaaaaa
                        </Button>
                    </Box>
                </Slide>
            )}
        </>
    )
}

export default Info;