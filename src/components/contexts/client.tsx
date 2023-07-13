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
  console.log(json)
  const { system_messages: messages, repos_to_show: config } = json;
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
      mountObj = {
        contact: {
          text: "bg",
          size: "4em",
          cSpan2: 2,
          end: 2,
          h: "auto",
          grid: {
            templateRows: "repeat(1, 1fr)",
            templateColumns: "repeat(2, 1fr)",
            minW: "95%",
          },
        },
        home: [2, 5, 9, 14, 18],
        project: {
          templateRows: "",
          templateColumns: "",
          colSpan: [],
          rowSpan: [],
        },
        academy: 6,
        objectives: {
          h: "35em",
          showCards: 0.65,
        },
        interests: {
          h: "50em",
          showCards: 0.75,
        },
      };
    } else if (innerWidth < 1440) {
      mountObj = {
        contact: {
          text: "bg",
          size: "3em",
          cSpan2: 3,
          end: 1,
          h: "auto",
          grid: {
            templateRows: "repeat(2, 1fr)",
            templateColumns: "repeat(5, 1fr)",
            minW: "33.375em",
          },
        },
        home: [1, 4, 9, 14, 16, 19],
        project: {
          templateRows: "repeat(2, 1fr)",
          templateColumns: "repeat(8, 1fr)",
          colSpan: [2, 4, 4],
          rowSpan: [3, 2],
        },
        academy: 5,
        objectives: {
          h: "18em",
          showCards: 0.65,
        },
        interests: {
          h: "26em",
          showCards: 0.75,
        },
      };
    } else {
      mountObj = {
        home: [1, 3, 6, 10, 15, 16, 19],
        contact: {
          text: "bg",
          size: "3em",
          cSpan2: 3,
          end: 1,
          h: "auto",
          grid: {
            templateRows: "repeat(2, 1fr)",
            templateColumns: "repeat(5, 1fr)",
            minW: "33.375em",
          },
        },
        project: {
          templateRows: "repeat(2, 1fr)",
          templateColumns: "repeat(8, 1fr)",
          colSpan: [2, 4, 4],
          rowSpan: [3, 2],
        },
        academy: 4,
        objectives: {
          h: "10em",
          showCards: 0.65,
        },
        interests: {
          showCards: 0.60,
          h: "20em",
        },
      };
    }

    if (innerWidth < 860) {
      mountObj.academy = 6;
    }

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
