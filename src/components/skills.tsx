import { Box } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import Levelers from "./levelers";
import NormalText from "./typography/normaltext";

function Skills() {


    return (
        <>
            <Box m='15px 0' justifyContent='center'>
                <Box w={'100%'} textAlign={'center'} fontWeight={600} fontStyle='italic'><NormalText customColor={Colors.Orange} customFontSize="13px">Anos de Experiência</NormalText></Box>
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