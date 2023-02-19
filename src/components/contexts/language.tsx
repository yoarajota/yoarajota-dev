import { Children, keyable } from "asset/types";
import { createContext, useCallback, useEffect, useState } from "react";
import Messages from "../../../statics/systemMessages";

export const LanguageContext = createContext<keyable>({});

export const LanguageContextProvider = ({ children }: Children) => {
  const [msg, setMsg] = useState<keyable>({});
  const [lang, setLang] = useState<string>(["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US');
  useEffect(() => {
    setMsg(Messages[["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US']);
  }, []);

  const changeLanguage = useCallback((value: string) => {
    setLang(value);
    setMsg(Messages[value]);
  }, []);

  return (
    <LanguageContext.Provider value={{ msg, changeLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};
