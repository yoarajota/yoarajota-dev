import { Box, Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { Handle } from "react-flow-renderer";
import { CustomNodes } from "../../asset/types";
import Levelers from "../levelers";

function NodeHead({ selectable, targetPosition, sourcePosition, data: { customFontSize, title, biggerVariable, bottomSource = false, label, xp, lvl, img } }: CustomNodes) {
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
        <Text m="0" p="5px" fontFamily="Ubuntu" fontSize="26px" color={Colors.Orange}>
          {label} </Text>
        <Box m="10px 0" w="100%" justifyContent="center">
          {/* <Image alt={`${label} logo`} src={img} /> */}
          {img()}
        </Box>
        <Levelers xp={xp ? xp : ""} lvl={lvl ? lvl : ""} />
      </Box>
      {sourcePosition && <Handle
        type="source"
        position={sourcePosition}
        isConnectable={selectable}
        style={{ width: '12px', height: '12px', border: '2px solid #4B4453', borderRadius: '360px', background: '#0D0D0D' }}
      />}
    </>
  );
}

export default NodeHead;

  // import { Box, Text, Image } from "@chakra-ui/react";
  // import Levelers from "../levelers";

  // function NodeHead({ img, lvl, xp, children }) {
  //   console.log(img);

  //   return (
  //     <Box
  //       m="0"
  //       borderRadius="8px"
  //       minWidth="220px"
  //       minHeight="220px"
  //       textAlign="center"
  //     >
  //       <Text m="0" p="5px" fontFamily="Ubuntu" fontSize="26px" color={Colors.Orange}>
  //         {children[0]}
  //       </Text>
  //       <Box m="10px 0" w="100%" justifyContent="center">
  //         {children[1]}
  //       </Box>
  //       <Levelers xp={xp ? xp : ""} lvl={lvl ? lvl : ""} />
  //     </Box>
  //   );
  // }

  // export default NodeHead;