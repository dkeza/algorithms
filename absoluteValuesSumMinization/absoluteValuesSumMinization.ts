function absoluteValuesSumMinimization(a: number[]): number {
    let result: number, pos: number;
    if (a.length % 2 == 0) {
        pos = a.length / 2 - 1;
    } else {
        pos = Math.floor(a.length / 2);
    }
    result = a[pos];
    return result;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));