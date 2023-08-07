import { keyable, SystemConfig } from "asset/types";
import { createContext, useCallback, useEffect, useMemo, useRef } from "react";

export const ClientContext = createContext<keyable>({});
export const ClientContextProvider = ({
  props: {
    msg,
    setMsg,
    lang,
    setLang,
    setSystemConfig,
    systemConfig,
    ref,
    json,
    setAnimationContainers,
    animationContainers,
    innerWidth,
    innerHeight
  },
  children,
}: // }: ClientContexType) => {
keyable) => {
  const {
    system_messages: messages,
    repos_to_show: config,
    system_config: systemConfigAll,
  } = json;

  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mountObj: SystemConfig;
    if (innerWidth < 764) {
      mountObj = systemConfigAll.width764;
    } else if (innerWidth < 1440) {
      mountObj = systemConfigAll.width1440;
    } else {
      mountObj = systemConfigAll.else;
    }

    setSystemConfig(mountObj);
  }, [innerWidth, setSystemConfig, systemConfigAll.else, systemConfigAll.width1440, systemConfigAll.width764]);

  const changeLanguage = useCallback(
    (value: string) => {
      setLang(value);
      setMsg(messages?.[value]);
      localStorage.setItem("lang", value);
    },
    [messages, setLang, setMsg]
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
      msg,
      changeLanguage,
      lang,
      systemConfig,
      ref,
      setAnimationContainers,
      animationContainers,
      config,
      innerWidth,
      innerHeight
    ]
  );
  return (
    <ClientContext.Provider value={memo}>{children}</ClientContext.Provider>
  );
};
