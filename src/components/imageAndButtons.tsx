import { Box, Button, Image } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Colors } from "asset/enums";
import { SiLinkedin } from "react-icons/si";
import api from "../api/axios";
import { AiOutlineFilePdf } from "react-icons/ai";
import { ImageAndButtonType } from "asset/types";
import { LanguageContext } from "./contexts/language";
import { motion } from "framer-motion";

function ImageAndButtons({ idString }: ImageAndButtonType) {
  const { lang } = useContext(LanguageContext);
  const [hovered, setHovered] = useState(false);

  const handleDownload = useCallback(() => {
    console.log(lang);

    api
      .get("http://localhost:3000/api/download", {
        params: { lang },
        responseType: "blob",
      })
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);

        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.download = "Currículo João Vítor Basso Sberse";
        fileLink.click();
        fileLink.remove();
      });
  }, [lang]);

  return (
    <Box
      w="100%"
      position="relative"
      flexDirection="column-reverse"
      alignItems="center"
      id={idString}
    >
      <motion.div
        id="buttons-div-image"
        animate={hovered ? { gap: "6rem", top: "5.5rem" } : { gap: "1rem" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Button
          h={"2rem"}
          padding={"1.8rem 0.8rem"}
          border="2px solid #4B4453"
          borderRadius="999px"
          onClick={() => {
            handleDownload();
          }}
          bg="transparent"
          color={Colors.Gray}
          _active={{ bg: "" }}
          _hover={{ bg: "" }}
          gap="9px"
        >
          <AiOutlineFilePdf size={"2em"} />
        </Button>
        <Button
          h={"2rem"}
          padding={"1.8rem 0.8rem"}
          border="2px solid #4B4453"
          borderRadius="999px"
          onClick={() => {
            window.open("https://www.linkedin.com/in/jo%C3%A3o-vitor-sberse/");
          }}
          bg="transparent"
          color={Colors.Gray}
          _active={{ bg: "" }}
          _hover={{ bg: "" }}
          gap="9px"
        >
          <SiLinkedin size={"2em"} color={Colors.Gray} />
        </Button>
      </motion.div>
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        top="0"
        position="absolute"
        margin={"0 auto"}
        alt="picture of João Vítor Sberse"
        src={"images/me.jpg"}
        w="150px"
        borderRadius="999px"
        border="4px solid #4B4453"
      />
    </Box>
  );
}

export default ImageAndButtons;
