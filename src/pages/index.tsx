import {
  Box,
} from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";

export default function Home() {
  return (
    <Box>
      <Scrollbar currentPosition={1} />
      <Resume />
      <Exp />
      <Tec />
    </Box>
  );
}
