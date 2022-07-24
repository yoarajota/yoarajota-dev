import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default [
  // {
  //   id: "1",
  //   type: "input",
    // style: { padding: '0', background: 'none' },
    // data: {
    //   label: (
    //     <>
    //       <Box m='0' border='4px solid #4B4453' borderRadius='8px' background='#0D0D0D'>
    //         <Text m='0' p='5px' fontFamily='Ubuntu' fontSize='24px' color='#D99E6A'>
    //           REACT JS
    //         </Text>
    //       </Box>
    //     </>
    //   )
    // },
  //   position: { x: 600, y: 0 }
  // },
  {
    id: "1",
    type: "input",
    style: { padding: '0', background: 'none', width: '40px', height: '22px' },
    data: {
      label: (
        <>
          <Box m='0' width='30px' height='30px' border='4px solid #4B4453' borderRadius='360px' background='#0D0D0D'>
          </Box>
        </>
      )
    },
    position: { x: 600, y: 0 }
  },
];
