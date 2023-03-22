import { MotionValue } from "framer-motion";
import { ReactNode, RefObject } from "react";
import { Position } from "react-flow-renderer";

export type defaultResponse = {
    status: string,
    data?: object | Array<any>,
    message?: string
}

export type Info = {
    [key: string]: any;
}

export interface keyable {
    [key: string]: any
}

interface Info {
    customFontSize?: number | string | null,
}

export interface Children {
    children: React.ReactNode
}

export type defaultText = Info & {
    customColor?: string,
    functions?: keyable
    size?: string
    text?: string | Array<string>
}

export type linkText = defaultText & {
    link: string;
}

interface IndexPage {
    indexPage?: boolean
}

interface otherColor {
    otherColor?: string,
}

export type yjLogotipo = IndexPage & otherColor

export type RainbowAnimation = Children & otherColor

interface Slide {
    howFar: number,
    delay?: number
}
interface Width {
    width: string
}

export type SlideLeft = Children & Slide

export type TimeLinePoints = Children & scrollYProgress & {
    sWidth: string,
    index: number,
}

export type Levelers = {
    xp: number,
    lvl: number,
    index: number,
    title: string
    extraDelay?: number,
}


export type CustomNodes = customFontSize & {
    targetPosition: Position;
    sourcePositon: Position;
    data: keyable;
    selectable: boolean;
};

export type Scrollbar = {
  scrollY: MotionValue<number>;
};

export type Nodes = {
  tech: integer;
};

interface scrollYProgress {
    scrollYProgress: MotionValue<number>
}

export type Section = scrollYProgress & {
    callApi: boolean
    hookedYPosition?: number
}

export type Timeline = scrollYProgress & {
    data: Array<any>,
    setInfo: React.Dispatch<SetStateAction<Array[]>>,
    info: keyable
}

export type DefaultAnimatedContainerType = Children & {
    motioned: MotionValue<number>
    end: number,
    classes?: string
}

export type ImageAndButtonType = {
    idString?: string
}

export type Carousel = {
    list: Array<string | ReactNode>
}

export type ModalType = ModalProps & {
    data?: keyable
}

export type AcademyType = Section & {
    modal: keyable
}