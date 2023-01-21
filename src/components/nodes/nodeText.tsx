import { Box, Text } from "@chakra-ui/react";
import { Handle, Position } from "react-flow-renderer";
import { CustomNodes } from "../../asset/types";

function NodeText({ data }: CustomNodes) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Box
        m="0"
        border="2px solid #4B4453"
        borderRadius="8px"
        background="#0D0D0D"
        minWidth="260px"
      >
        <Text
          m="0"
          p="5px"
          fontFamily="Ubuntu"
          fontSize={data.customFontSize ? data.customFontSize : "24px"}
          color={data.title ? "#D99E6A" : "#4B4453"}
        >
          {data.label}
        </Text>
      </Box>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={data.handleStyle}
      />
    </>
  );
}

export default NodeText;