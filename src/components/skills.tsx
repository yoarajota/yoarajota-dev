import { Box } from "@chakra-ui/react";
import SlideFromLeft from "./animations/slideleft";
import Levelers from "./levelers";
import NormalText from "./typography/normaltext";

function Skills() {


    return (
        <>
            <Box m='15px 0' justifyContent='center'>
                <Box w={'100%'} textAlign={'center'} fontWeight={600} fontStyle='italic'><NormalText customColor="#D99E6A" customFontSize="13px">Anos de Experiência</NormalText></Box>
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
                <Levelers xp={1} lvl={1} title='Testeee' />
            </Box>
        </>
    );
}

export default Skills;