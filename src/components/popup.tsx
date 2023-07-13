import { Box, Button, Tooltip } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { ClientContext } from "./contexts/client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { BsGear } from "react-icons/bs";
import { Colors } from "asset/enums";
import { motion } from "framer-motion";
import FromRightPopupAnimation from "./animations/fromRightPopupAnimation";

const VALUES = ["pt-BR", "en-US"];

function Popup() {
  const inputRef = React.createRef<HTMLInputElement>();
  const inputRef2 = React.createRef<HTMLInputElement>();
  const { lang, changeLanguage, setAnimationContainers, animationContainers } =
    useContext(ClientContext);

  const handleClickLanguage = useCallback(() => {
    changeLanguage(VALUES[Number(lang === "pt-BR")]);
  }, [changeLanguage, lang]);

  const handleClickAnimation = useCallback(async () => {
    let value: boolean = false;
    await setAnimationContainers((p: boolean) => {
      value = !p;
      return !p;
    });
    localStorage.setItem("animation", value ? "1" : "0");
  }, [setAnimationContainers]);

  return (
    <FromRightPopupAnimation keyProp="popup" className="popup-wrap">
      <Popover placement="left-end">
        <PopoverTrigger>
          <Box cursor="pointer">
            <motion.div whileHover={{ rotateZ: -90, scale: 1.1 }}>
              <BsGear size="1.4em" color={Colors.Gray} />
            </motion.div>
          </Box>
        </PopoverTrigger>
        <PopoverContent
          p="0 25px 0px 5px"
          w="fit-content"
          bg={Colors.Black}
          border={`2px solid ${Colors.Gray}`}
        >
          <PopoverCloseButton color={Colors.Gray} />
          <PopoverBody
            w="fit-content"
            gap="0.3em"
            display="flex"
            flexDirection="column"
          >
            <Tooltip
              placement="left"
              hasArrow
              label="Língua da página"
              bg={Colors.Black}
              color={Colors.Gray}
            >
              <div
                className="button r"
                id="switch"
                onClick={() => {
                  inputRef.current?.click();
                }}
              >
                <input
                  defaultChecked={lang !== "pt-BR"}
                  type="checkbox"
                  className="checkbox"
                  id="check"
                  ref={inputRef}
                  onClick={handleClickLanguage}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </Tooltip>
            <Tooltip
              placement="left"
              hasArrow
              label="Ativar ou desativar animações das seções"
              bg={Colors.Black}
              color={Colors.Gray}
            >
              <div
                className="button r"
                id="switch2"
                onClick={() => {
                  inputRef2.current?.click();
                }}
              >
                <input
                  defaultChecked={animationContainers}
                  type="checkbox"
                  className="checkbox"
                  id="check2"
                  ref={inputRef2}
                  onClick={handleClickAnimation}
                />
                <div className="knobs onoff"></div>
                <div className="layer"></div>
              </div>
            </Tooltip>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FromRightPopupAnimation>

  );
}

export default Popup;
