function allLongestStrings(inputArray: string[]): string[] {
    let result: string[] = [], maxlength: number = 0;
    for (let i=0; i<inputArray.length; i++) {
        maxlength = Math.max(maxlength, inputArray[i].length)
    }
    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i].length===maxlength) {
            result.push(inputArray[i])
        }

    }
    return result;
}

console.log(allLongestStrings(["abax", "aa", "ad", "vcds", "aba"]));