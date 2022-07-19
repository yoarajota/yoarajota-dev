import { Box } from "@chakra-ui/react";
import SlideFromLeft from "./animations/slideleft";
import Levelers from "./levelers";

function Skills() {


    return (
        <>
            <Box m='15px 0' justifyContent='center'>
                <SlideFromLeft delay={1.5}>
                    <Levelers xp='1' lvl='1' title='Testeee' />
                </SlideFromLeft>
                <SlideFromLeft delay={1.7}>
                    <Levelers xp='1' lvl='1' title='Testeee' />
                </SlideFromLeft>
                <SlideFromLeft delay={1.9}>
                    <Levelers xp='1' lvl='1' title='Testeee' />
                </SlideFromLeft>
                <SlideFromLeft delay={2.1}>
                    <Levelers xp='1' lvl='1' title='Testeee' />
                </SlideFromLeft>
            </Box>
        </>
    );
}

export default Skills;