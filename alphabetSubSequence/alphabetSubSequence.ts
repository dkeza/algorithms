function alphabetSubsequence(s: string): boolean {
    let result: boolean = true, prevChar: string = "";
    const charsChecked = new Set();
    for (let e of s) {
        // Check if current char is before previous char (compared on ascii code table)
        if (prevChar.length>0 && e.charCodeAt(0) < prevChar.charCodeAt(0)) {
            result = false;
            break;
        }
        // Check if current was char already found in string
        if (charsChecked.has(e)) {
            result = false;
            break;
        }
        // Add current char to set, to check it in next iteration
        charsChecked.add(e);
        // Store current char for check in next iteration
        prevChar = e;
    }
    return result;
}

console.log(alphabetSubsequence('abc'))
console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
