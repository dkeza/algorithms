function addTwoDigits(n: number): number {
    let result: number = 0, numstring: string = "";
    numstring = "" + n;
    result = parseInt(numstring.substr(0,1),10) + parseInt(numstring.substr(1,1),10);
    return result;
}

console.log(addTwoDigits(99));