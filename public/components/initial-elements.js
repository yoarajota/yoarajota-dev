import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default [

  {
    id: "1",
    type: "input",
    style: { padding: '0', background: 'none', width: '38px', height: '19px', border: 'none' },
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
