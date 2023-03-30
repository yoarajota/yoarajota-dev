import { Box } from "@chakra-ui/react";
import React, {
  useCallback,
  useContext,
} from "react";
import { ClientContext } from "./contexts/client";

const VALUES = ["pt-BR", "en-US"];

function LanguagePop() {
  const inputRef = React.createRef<HTMLInputElement>();
  const { lang, changeLanguage } = useContext(ClientContext);

  const handleClick = useCallback(() => {
    changeLanguage(VALUES[Number(lang === "pt-BR")])
  }, [changeLanguage, lang]);

  return (
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
          onClick={handleClick}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </Box>
  );
}

export default LanguagePop;
