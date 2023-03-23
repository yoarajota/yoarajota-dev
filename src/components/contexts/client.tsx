import { Children, keyable } from "asset/types";
import { createContext, useCallback, useEffect, useState } from "react";
import Messages from "../../../statics/systemMessages";

export const ClientContext = createContext<keyable>({});

export const ClientContextProvider = ({ children }: Children) => {
  const [msg, setMsg] = useState<keyable>({});
  const [lang, setLang] = useState<string>(["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US');
  const [windowValues, setWindowValues] = useState<keyable>({});
  useEffect(() => {
    setWindowValues({innerWidth: window.innerWidth, innerHeight: window.innerHeight})
  }, [])

  useEffect(() => {
    setMsg(Messages[["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US']);
  }, []);

  const changeLanguage = useCallback((value: string) => {
    setLang(value);
    setMsg(Messages[value]);
  }, []);

  return (
    <ClientContext.Provider value={{ msg, changeLanguage, lang, innerWidth: windowValues.innerWidth, innerHeight: windowValues.innerHeight }}>
      {children}
    </ClientContext.Provider>
  );
};
