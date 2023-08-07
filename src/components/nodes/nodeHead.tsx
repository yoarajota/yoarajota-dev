import { Box, Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import _ from "lodash";
import { Handle } from "react-flow-renderer";
import { CustomNodes } from "../../asset/types";
import Levelers from "../levelers";

function NodeHead({ selectable, targetPosition, sourcePosition, data: { customFontSize, title, biggerVariable, bottomSource = false, label, xp, lvl, Img } }: CustomNodes) {
  if (biggerVariable) {
    customFontSize = "26px"
    title = true
  }

  return (
    <>
      <Box
        m="0"
        borderRadius="8px"
        minWidth="220px"
        minHeight="220px"
        textAlign="center"
      >
        <Text
          m="0"
          p="5px"
          fontFamily="var(--ubuntu)"
          fontSize="26px"
          color={Colors.Orange}
        >
          {label}{" "}
        </Text>
        <Box m="10px 0" w="100%" justifyContent="center">
          {<Img />}
        </Box>
        <Levelers title="" index={parseInt(_.uniqueId())} xp={xp ? xp : ""} lvl={lvl ? lvl : ""} />
      </Box>
      {sourcePosition && (
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={selectable}
          style={{
            width: "12px",
            height: "12px",
            border: "2px solid #4B4453",
            borderRadius: "360px",
            background: "#0D0D0D",
          }}
        />
      )}
    </>
  );
}

export default NodeHead;