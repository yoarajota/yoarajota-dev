import { Box, Text } from "@chakra-ui/react";
import { Handle, Position } from "react-flow-renderer";
import { CustomNodes } from "../../asset/types";

function NodeText({ selectable, targetPosition, sourcePosition, data: { customFontSize, title, biggerVariable, label, handleStyle } }: CustomNodes) {
  if (biggerVariable) {
    customFontSize = "26px"
    title = true
  }

  return (
    <>
      {targetPosition && <Handle type="target" style={{ width: '12px', height: '12px', border: '2px solid #4B4453', borderRadius: '360px', background: '#0D0D0D' }} position={targetPosition} />}
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
          fontSize={customFontSize ? customFontSize : "24px"}
          color={title ? "#D99E6A" : "#4B4453"}
        >
          {/* {label?.[0] !== undefined ? label?.map?.((i: string) => <>{i}<br /></>) : label} */}
          {label}
        </Text>
      </Box>
      {sourcePosition !== Position.Bottom && <Handle
        type="source"
        position={sourcePosition}
        isConnectable={selectable}
        id="a"
        style={{ width: '12px', height: '12px', border: '2px solid #4B4453', borderRadius: '360px', background: '#0D0D0D' }}
      />}
    </>
  );
}

export default NodeText;