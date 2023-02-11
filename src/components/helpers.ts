export function createArraysTimeLinePoints(end: string): Array<any> {
    var set: Array<number> = [0];
    let c = 0;
    while (!set.includes(1) && c < 30) {
        c++
        set.push(parseFloat((set[set.length - 1] + 0.05).toFixed(2)));
    }

    let arr: Array<string> = [];
    set.forEach((val, index) => {
        if (index > 4) {
            arr.push(end)
        } else {
            arr.push("0%")
        }
    });

    return [set, arr]
};