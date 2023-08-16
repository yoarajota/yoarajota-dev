import { EdgeConfigValue } from "@vercel/edge-config";
import { MotionValue } from "framer-motion";
import { JwtPayload } from "jsonwebtoken";
import { ReactNode, RefObject } from "react";
import { Position } from "react-flow-renderer";

export type defaultResponse = {
  status: string;
  data?: object | Array<any> | EdgeConfigValue;
  message?: string;
  token?: string
};

export type Info = {
  [key: string]: any;
};

export interface keyable {
  [key: string]: any;
}

export type ContactConfig = showCards & {
  text: string;
  size: string;
  cSpan2: number;
  end: number;
  h: string;
  grid: keyable;
};

export type ProjectGridConfig = {
  templateRows: string;
  templateColumns: string;
  colSpan: Array<number>;
  rowSpan: Array<number>;
};

interface showCards {
  showCards: number;
}

interface h {
  h: string;
}

export type ObjectivesConfig = showCards & h;
export type InterestsConfig = h & showCards;

export type SystemConfig = {
  contact: ContactConfig;
  home: Array<number>;
  project: ProjectGridConfig;
  academy: number;
  objectives: ObjectivesConfig;
  interests: InterestsConfig;
};

interface Info {
  customFontSize?: number | string | null;
}

export interface Children {
  children:
    | React.ReactNode
    | ReactElement<any, string | JSXElementConstructor<any>>;
}

export type ClientContext = Children & {
  json: keyable;
};

export type Client = Children & {
  messages: keyable;
};

interface ClassName {
  className?: string;
}

export type ScaleAnimation = Children &
  ClassName & {
    scale: number;
    functions?: keyable;
    duration?: number;
  };

export type defaultText = Info & {
  customColor?: string;
  functions?: keyable;
  size?: string;
  text?: string | Array<string>;
};

export type linkText = defaultText & {
  link: string;
};

interface IndexPage {
  indexPage?: boolean;
}

interface otherColor {
  otherColor?: string;
}

export type yjLogotipo = IndexPage & otherColor;

export type RainbowAnimation = Children & otherColor;

interface Slide {
  howFar: number;
  delay?: number;
}
interface Width {
  width: string;
}

export type SlideLeft = Children & Slide;

export type TimeLinePointsType = Children & {
  sWidth: string;
  index: number;
};

export type Levelers = {
  xp: number;
  lvl: number;
  index: number;
  title: string;
  extraDelay?: number;
};

export type CardsType = {
  title: string;
  desc: string;
  size?: string;
};

export type CustomNodes = customFontSize & {
  targetPosition: Position;
  sourcePositon: Position;
  data: keyable;
  selectable: boolean;
};

export type Scrollbar = {
  scrollY: MotionValue<number>;
};

interface scrollYProgress {
  scrollYProgress: MotionValue<number>;
}

export type Timeline = {
  data: Array<any>;
  setInfo: React.Dispatch<SetStateAction<Array[]>>;
  info: keyable;
};

export type DefaultAnimatedContainerType = Children & {
  end: number;
  delay?: number;
  classes?: string;
  from?: number;
};

export type ImageAndButtonType = {
  idString?: string;
};

export type BoxSlideCarousel = {
  title: string;
  text: string;
  inst: string;
};

export type CarouselBox = {
  list: Array<BoxSlideCarousel>;
};

export type Carousel = {
  list: Array<string | ReactNode>;
};

export type ModalType = ModalProps & {
  data?: keyable;
};

export type AcademyType = {
  modal?: keyable;
};

export type LanguagesIconsType = {
  language: string;
};


interface KeyProp {
  keyProp?: string;
}

export type FadeFromTop = Children &
  KeyProp & {
    delay?: number;
  };

export type endProp = {
  end?: number;
};

export type ButtonType = customFontSize & {
  customColor?: string;
  onClick?: CallableFunction;
  text: string;
  type?: string;
};

export type FromRightPopup = Children & ClassName & KeyProp;

export type Credentials = {
  password: string,
  email: sring
}

interface DecodedToken extends JwtPayload {
  remote_address: string
}

export type Comment = {
  name?: string;
  comment: string;
  new?: boolean
};


export type ExpData = {
  "pt-BR": Array<keyable>,
  "en-US": Array<keyable>,
}

export type AllProps = {
  comments: Array<Comment>;
  exp: ExpData;
  json: EdgeConfigItems;
  projects: keyable;
};

export type DataStackType = {
  title: string,
  data: Array<String>
};