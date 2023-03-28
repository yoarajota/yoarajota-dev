import { Box } from "@chakra-ui/react";
import React, {
  useCallback,
  useContext,
  useState,
} from "react";
import { ClientContext } from "./contexts/client";

const Values = ["pt-BR", "en-US"];

function LanguagePop() {
  const inputRef = React.createRef<HTMLInputElement>();
  const { lang, changeLanguage } = useContext(ClientContext);
  const [state, setState] = useState<string>(lang);

  const handleClick = useCallback(() => {
    setState(Values[Number(state === "pt-BR")]);
    changeLanguage(Values[Number(state === "pt-BR")])
  }, [changeLanguage, state]);

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
          defaultChecked={state !== "pt-BR"}
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
