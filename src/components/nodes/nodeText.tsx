import { Box, Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { Handle, Position } from "react-flow-renderer";
import { CustomNodes } from "../../asset/types";

function NodeText({ selectable, targetPosition, sourcePosition, data: { customFontSize, title, biggerVariable, bottomSource = false, label, handleStyle } }: CustomNodes) {
  if (biggerVariable) {
    customFontSize = "26px"
    title = true
  }

  return (
    <>
      {targetPosition && <Handle type="target" style={{ width: '12px', height: '12px', border: `2px solid ${Colors.Purple}`, borderRadius: '360px', background: Colors.Black }} position={targetPosition} />}
      <Box
        m="0"
        border={`2px solid ${Colors.Purple}`}
        borderRadius="8px"
        background={Colors.Black}
        minWidth="260px"
      >
        {Array.isArray(label) ? label.map((i: string) => {
          return (<>
            <Text
              fontFamily="Ubuntu"
              fontSize={customFontSize ? customFontSize : "24px"}
              color={title ? Colors.Orange : Colors.Purple}
            >
              {i}
            </Text>
          </>)
        }) : <Text
          m="0"
          p="5px"
          fontFamily="Ubuntu"
          fontSize={customFontSize ? customFontSize : "24px"}
          color={title ? Colors.Orange : Colors.Purple}
        >{label} </Text>}
      </Box>
      {(sourcePosition !== Position.Bottom || bottomSource) && <Handle
        type="source"
        position={sourcePosition}
        isConnectable={selectable}
        style={{ width: '12px', height: '12px', border: `2px solid ${Colors.Purple}`, borderRadius: '360px', background: Colors.Black }}
      />}
    </>
  );
}

export default NodeText;