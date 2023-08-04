import {
  ClientContext as ClientContexType,
  keyable,
  SystemConfig,
} from "asset/types";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const ClientContext = createContext<keyable>({});
export const ClientContextProvider = ({
  children,
  json,
}: ClientContexType) => {
  const { system_messages: messages, repos_to_show: config, system_config: systemConfigAll } = json;
  
  const ref = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<keyable>({});
  const [animationContainers, setAnimationContainers] = useState<boolean>(true);
  const [{ innerHeight, innerWidth }, setWindowValues] = useState<keyable>({});
  const [systemConfig, setSystemConfig] = useState<SystemConfig>({
    contact: {
      text: "",
      size: "",
      cSpan2: 0,
      end: 0,
      h: "",
      showCards: 0.67,
      grid: {
        templateRows: "",
        templateColumns: "",
        minW: "",
      },
    },
    home: [],
    project: {
      templateRows: "",
      templateColumns: "",
      colSpan: [],
      rowSpan: [],
    },
    academy: 0,
    objectives: {
      h: "",
      showCards: 0,
    },
    interests: {
      h: "",
      showCards: 0
    },
  });
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

    let storageAnimation = localStorage.getItem("animation");
    if (storageAnimation) {
      setAnimationContainers(!!parseInt(storageAnimation));
    }

    setMsg(
      messages?.[
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
  }, [messages]);

  useEffect(() => {
    let mountObj: SystemConfig;
    if (innerWidth < 764) {
      mountObj = systemConfigAll.width764
    } else if (innerWidth < 1440) {
      mountObj = systemConfigAll.width1440
    } else {
      mountObj = systemConfigAll.else
    };

    setSystemConfig(mountObj);
  }, [innerWidth]);

  const changeLanguage = useCallback(
    (value: string) => {
      setLang(value);
      setMsg(messages?.[value]);
      localStorage.setItem("lang", value);
    },
    [messages]
  );

  const memo = useMemo(
    () => ({
      msg,
      changeLanguage,
      lang,
      innerWidth,
      innerHeight,
      systemConfig,
      ref,
      wrap,
      setAnimationContainers,
      animationContainers,
      config,
    }),
    [
      changeLanguage,
      innerHeight,
      innerWidth,
      lang,
      msg,
      systemConfig,
      animationContainers,
      config,
    ]
  );
  return (
    <ClientContext.Provider value={memo}>{children}</ClientContext.Provider>
  );
};
