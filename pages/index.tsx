import {
  Box,
  Center,
  Heading,
  Image,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import Skills from "../src/components/skills";
import Titles from "../src/components/typography/titles";
import Yj from "../src/components/yj";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NormalText from "../src/components/typography/normaltext";
import api from "../src/api/axios";
import Exp from "../src/sections/exp";
import Tec from "../src/sections/tec";
import Resume from "../src/sections/resume";
import Scrollbar from "../src/components/scrollbar";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter();

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <Box>
      <Scrollbar currentPosition={1} />
      <Resume />
      <Exp />
      <Tec />
    </Box>
  );
}
