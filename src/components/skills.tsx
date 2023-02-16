import { Box } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { keyable } from "asset/types";
import LevelersData from "../../statics/levelersData";
import Levelers from "./levelers";
import NormalText from "./typography/normaltext";

function Skills() {
    return (
        <>
            <Box m='15px 0' justifyContent='center'>
                <Box w={'100%'} textAlign={'center'} fontWeight={600} fontStyle='italic'><NormalText customColor={Colors.Orange} customFontSize="13px">Anos de Experiência Profissional</NormalText></Box>
                {LevelersData.map((i: keyable, index: number) => <Levelers key={index} index={index} xp={i.xp} lvl={i.lvl} title={i.title} />)}
            </Box>
        </>
    );
}

export default Skills;