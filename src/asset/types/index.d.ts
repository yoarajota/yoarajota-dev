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

export type ContactConfig = {
    text: string,
    size: string,
    cSpan2: number,
    end: number,
    h: string,
    grid: keyable
}

export type ProjectGridConfig = {
    templateRows: string,
    templateColumns: string,
    colSpan: Array<number>,
    rowSpan: Array<number>,
}

export type SystemConfig = {
    contact: ContactConfig,
    home: Array<number>,
    project: ProjectGridConfig,
    academy: number
}

interface Info {
    customFontSize?: number | string | null,
}

export interface Children {
    children: React.ReactNode | ReactElement<any, string | JSXElementConstructor<any>>
}

interface ClassName {
    className?: string
}

export type ScaleAnimation = Children & ClassName & {
    scale: number,
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

export type TimeLinePointsType = Children & {
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

export type CardsType = {
    title: string,
    desc: string,
    size?: string
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

interface scrollYProgress {
    scrollYProgress: MotionValue<number>
}


export type Timeline = {
    data: Array<any>,
    setInfo: React.Dispatch<SetStateAction<Array[]>>,
    info: keyable
}

export type DefaultAnimatedContainerType = Children & {
    end: number,
    delay?: number,
    classes?: string,
    from?: number
}

export type ImageAndButtonType = {
    idString?: string
}

export type BoxSlideCarousel = {
    title: string,
    text: string,
    inst: string
}

export type CarouselBox = {
    list: Array<BoxSlideCarousel>;
}

export type Carousel = {
    list: Array<string | ReactNode>;
};

export type ModalType = ModalProps & {
    data?: keyable
}

export type AcademyType = {
    modal?: keyable
}

export type LanguagesIconsType = {
    language: string
}

interface Key {
    key?: string
}

export type FadeFromTop = Children & Key & {
    delay?: number,
}

export type endProp = {
    end?: number
}

export type FromRightPopup = Children & ClassName & Key