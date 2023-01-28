import {
  Box,
} from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll()
  const wrap = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(wrap.current?.scrollHeight)
    console.log("aa =>", scrollYProgress);
  });

  return (
    <Box ref={wrap}>
      <Scrollbar currentPosition={wrap.current?.scrollHeight} scrollYProgress={scrollYProgress}/>
      <Resume />
      <Exp />
      <Tec />
    </Box>
  );
}
