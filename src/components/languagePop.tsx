import { Box } from "@chakra-ui/react";
import React, {
  LegacyRef,
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LanguageContext } from "./contexts/language";

const Values = ["pt-BR", "en-US"];

function LanguagePop() {
  const inputRef = React.createRef<HTMLInputElement>();
  const { lang, changeLanguage } = useContext(LanguageContext);
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
          checked={state !== "pt-BR"}
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
