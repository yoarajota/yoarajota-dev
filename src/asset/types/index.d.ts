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

export type defaultText = Info & Children & {
    customColor?: string
}

interface IndexPage {
    indexPage?: boolean
}

interface otherColor {
    otherColor?: string,
}

export type yjLogotipo = IndexPage & otherColor

export type RainbowAnimation = Children & otherColor

// { howFar, delay, children }

interface Slide {
    howFar: number,
    delay?: number
}
interface Width {
    width: string
}

export type SlideLeft = Children & Slide
export type TimeLinePoints = Children & Width

export type Levelers = {
    xp: number,
    lvl: number,
    title: string
}


export type CustomNodes = customFontSize & {
    targetPosition: Position;
    sourcePositon: Position;
    data: keyable;
    selectable: boolean;
};

export type Scrollbar = {
    currentPosition: integer
}
