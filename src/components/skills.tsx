import { Box, Tooltip } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { keyable } from "asset/types";
import LevelersData from "../../statics/levelersData";
import Levelers from "./levelers";
import NormalText from "./typography/normaltext";

function Skills() {
  return (
    <>
      <Box
        m="15px 0"
        display="flex"
        flexDir="column"
        alignItems="center"
        minHeight={"45vh"}
      >
        <Box textAlign={"center"} fontWeight={600} fontStyle="italic">
          <NormalText
            customColor={Colors.Orange}
            customFontSize="13px"
            text={"Anos de Experiência Profissional"}
          />
        </Box>
        {LevelersData.map((i: keyable, index: number) => (
          <Levelers
            extraDelay={6}
            key={index}
            index={index}
            xp={i.xp}
            lvl={i.lvl}
            title={i.title}
          />
        ))}

        <Box display="flex" gap="15px">
          <Tooltip  width="15px" h="15px" bg="red" label="Hover me">
            a
          </Tooltip>
          <Tooltip  width="15px" h="15px" bg="red" label="Hover me">
            b
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
