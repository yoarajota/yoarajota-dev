import { Box, Tooltip } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { keyable } from "asset/types";
import { useContext } from "react";
import LevelersData from "../../statics/levelersData";
import { ClientContext } from "./contexts/client";
import Levelers from "./levelers";
import NormalText from "./typography/normaltext";

function Skills() {
  const { msg } = useContext(ClientContext);

  return (
      <Box
        m="15px 0"
        display="flex"
        flexDir="column"
        alignItems="center"
        minHeight="45vh"
      >
        <Box textAlign="center" marginBottom="1em" fontWeight={600} fontStyle="italic">
          <NormalText
            customColor={Colors.Orange}
            customFontSize="13px"
            text="Anos de Experiência Profissional"
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

        <Box display="flex"  marginTop="1em" gap="15px">
          <Tooltip label={msg.subtitle_study}>
            <Box bg={Colors.Study} h="1em" borderRadius="full" w="1em" />
          </Tooltip>
          <Tooltip label={msg.subtitle_work}>
            <Box bg={Colors.Work} h="1em" borderRadius="full" w="1em" />
          </Tooltip>
        </Box>
      </Box>
  );
}

export default Skills;
