import { Box } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { DiReact } from "react-icons/di";
import { ClientContext } from "./contexts/client";

const VALUES = ["pt-BR", "en-US"];

function Popup() {
  const inputRef = React.createRef<HTMLInputElement>();
  const inputRef2 = React.createRef<HTMLInputElement>();
  const {
    lang,
    changeLanguage,
    setDisabledAnimationsContainers,
    disbledAnimationsContainers,
  } = useContext(ClientContext);

  const handleClickLanguage = useCallback(() => {
    changeLanguage(VALUES[Number(lang === "pt-BR")]);
  }, [changeLanguage, lang]);

  const handleClickAnimation = useCallback(() => {
    setDisabledAnimationsContainers((p: boolean) => !p);
  }, [setDisabledAnimationsContainers]);

  return (
    <>
      <Box
        position={"fixed"}
        right={"13px"}
        top={"25px"}
        zIndex={14}
        display="flex"
        justifyContent="center"
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
      </Box>

      <Box
        position={"fixed"}
        right={"13px"}
        top={"65px"}
        zIndex={14}
        display="flex"
        justifyContent="center"
      >
        <div
          className="button r"
          id="switch2"
          onClick={() => {
            inputRef2.current?.click();
          }}
        >
          <input
            defaultChecked={disbledAnimationsContainers}
            type="checkbox"
            className="checkbox"
            id="check2"
            ref={inputRef2}
            onClick={handleClickAnimation}
          />
          <div className="knobs onoff"></div>
          <div className="layer"></div>
        </div>
      </Box>
    </>
  );
}

export default Popup;
