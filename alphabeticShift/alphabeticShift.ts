function alphabeticShift(inputString: string): string {
    let result: string = "";
    for (let i = 0; i < inputString.length; i++) {
        let char: string = "", code: number = 0;
        code = inputString[i].charCodeAt(0)+1
        if (code > 122) { // when letter was z, then next letter is a
            code = 97;
        }
        char = String.fromCharCode(code);
        result = result + char;
    }

    return result;
}

console.log(alphabeticShift('crazy'));