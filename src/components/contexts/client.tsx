import { Children, keyable } from "asset/types";
import { createContext, useCallback, useEffect, useState } from "react";
import Messages from "../../../statics/systemMessages";

export const ClientContext = createContext<keyable>({});

export const ClientContextProvider = ({ children }: Children) => {
  const [msg, setMsg] = useState<keyable>({});
  const [lang, setLang] = useState<string>(["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US');
  const [windowValues, setWindowValues] = useState<keyable>({});
  useEffect(() => {
    setWindowValues({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });

    let storageLang = localStorage.getItem('lang');
    if (storageLang) {
      setLang(storageLang)
    }
    
    setMsg(Messages[storageLang ? storageLang : ["pt-BR", "en-US"].includes(global.navigator?.language) ? global.navigator?.language : 'en-US']);

    const handleResize = () =>
      setWindowValues({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = useCallback((value: string) => {
    console.log(value, 'aaa')

    setLang(value);
    setMsg(Messages[value]);
    localStorage.setItem('lang', value)
  }, []);

  return (
    <ClientContext.Provider
      value={{
        msg,
        changeLanguage,
        lang,
        innerWidth: windowValues.innerWidth,
        innerHeight: windowValues.innerHeight,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
