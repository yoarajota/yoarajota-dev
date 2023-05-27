import { keyable } from "asset/types";

export function createArraysTimeLinePoints(end: string, innerWidth: number): Array<any> {
  let gap = 1;
  if (innerWidth < 768) {
    gap = 1;
  } else {
    gap = 2;
  }

  let set: Array<number> = [0];
  while (!set.includes(1)) {
    set.push(parseFloat((set[set.length - 1] + 0.05).toFixed(2)));
  }

  let arr: Array<string> = [];
  set.forEach((val, index) => {
    if (index > gap) {
      arr.push(end);
    } else {
      arr.push("0%");
    }
  });

  return [set, arr];
}

export function createArrayAnimatedContainer(end: number, delay: number = 0): keyable {
  let pixels: Array<string> = [];
  let opacityValue: Array<string> = [];
  let motionValueArray: Array<number> = [];
  for (let i = 0; i < 40; i++) {
    if (i - delay === end + 1) {
      pixels.push("-50%");
      opacityValue.push("0.5");
    } else if (i - delay > end) {
      pixels.push("0%");
      opacityValue.push("1");
    } else {
      pixels.push("-100%");
      opacityValue.push("0");
    }

    motionValueArray.push(
      parseFloat(
        ((motionValueArray[motionValueArray.length - 1] ?? 0) + 0.05).toFixed(2)
      )
    );
  }

  return { pixels, opacityValue, motionValueArray };
}

export function createArrayPopInContainer(end: number, from: number): keyable {
  let pixels: Array<number> = [];
  let motionValueArray: Array<number> = [];
  for (let i = 0; i < 40; i++) {
    if (i === end + 1) {
      pixels.push(from/2);
    } else if (i > end) {
      pixels.push(0);
    } else {
      pixels.push(from);
    }

    motionValueArray.push(
      parseFloat(
        ((motionValueArray[motionValueArray.length - 1] ?? 0) + 0.05).toFixed(2)
      )
    );
  }
  return { pixels, motionValueArray };
}