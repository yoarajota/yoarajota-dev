import { Box } from "@chakra-ui/react";
import SlideFromLeft from "./animations/slideleft";
import Levelers from "./levelers";

function Skills() {


    return (
        <>
            <Box m='15px 0' justifyContent='center'>
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
                <Levelers xp='1' lvl='1' title='Testeee' />
            </Box>
        </>
    );
}

export default Skills;