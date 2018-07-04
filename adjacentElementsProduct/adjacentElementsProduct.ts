function adjacentElementsProduct(inputArray: number[]): number {
    let result: number = 0;
    for (let i=0;i<inputArray.length;i++) {
        let p: number = 0, nextEl: number = 0;
        nextEl = inputArray[i+1];
        if (!nextEl) {
            // No next element, exit
            break;
        }
        p = inputArray[i] * inputArray[i+1];
        result = Math.max(result, p);
    }
    return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([1, 3, 1]));