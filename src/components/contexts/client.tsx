import { Children, keyable, SystemConfig } from "asset/types";
import { createContext, useCallback, useEffect, useState } from "react";
import Messages from "../../../statics/systemMessages";

export const ClientContext = createContext<keyable>({});
export const ClientContextProvider = ({ children }: Children) => {
  const [systemConfig, setSystemConfig] = useState<SystemConfig>({
    contact: {
      text: "",
      size: "",
      cSpan2: 0,
      end: 0,
      h: "",
    },
    home: [],
    project: {
      templateRows: "",
      templateColumns: "",
      colSpan: [],
      rowSpan: [],
    },
    academy: 0
  });

  const [msg, setMsg] = useState<keyable>({});
  const [{ innerHeight, innerWidth }, setWindowValues] = useState<keyable>({});

  const [lang, setLang] = useState<string>(
    ["pt-BR", "en-US"].includes(global.navigator?.language)
      ? global.navigator?.language
      : "en-US"
  );

  useEffect(() => {
    setWindowValues({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });

    let storageLang = localStorage.getItem("lang");
    if (storageLang) {
      setLang(storageLang);
    }

    setMsg(
      Messages[
      storageLang
        ? storageLang
        : ["pt-BR", "en-US"].includes(global.navigator?.language)
          ? global.navigator?.language
          : "en-US"
      ]
    );

    const handleResize = () =>
      setWindowValues({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let mountObj: SystemConfig;
    if (innerWidth < 764) {
      mountObj = {
        contact: {
          text: "bg",
          size: "4em",
          cSpan2: 2,
          end: 2,
          h: "auto",
        },
        home: [2, 5, 9, 14],
        project: {
          templateRows: "",
          templateColumns: "",
          colSpan: [],
          rowSpan: [],
        },
        academy: 6
      };
    } else if (innerWidth < 1440) {
      mountObj = {
        contact: {
          text: "bg",
          size: "4em",
          cSpan2: 3,
          end: 1,
          h: "auto",
        },
        home: [1, 4, 9, 15],
        project: {
          templateRows: "repeat(2, 1fr)",
          templateColumns: "repeat(8, 1fr)",
          colSpan: [2, 4, 4],
          rowSpan: [2],
        },
        academy: 5
      }
    } else {
      mountObj = {
        contact: {
          text: "bg",
          size: "4em",
          cSpan2: 3,
          end: 1,
          h: "auto",
        },
        home: [2, 5, 8, 16],
        project: {
          templateRows: "repeat(2, 1fr)",
          templateColumns: "repeat(8, 1fr)",
          colSpan: [2, 4, 4],
          rowSpan: [2],
        },
        academy: 5
      };
    }

    if (innerWidth < 860) {
      mountObj.academy = 6;
    }

    setSystemConfig(mountObj);
  }, [innerWidth])

  const changeLanguage = useCallback((value: string) => {
    setLang(value);
    setMsg(Messages[value]);
    localStorage.setItem("lang", value);
  }, []);

  return (
    <ClientContext.Provider
      value={{
        msg,
        changeLanguage,
        lang,
        innerWidth,
        innerHeight,
        systemConfig
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
