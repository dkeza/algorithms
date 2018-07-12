function arrayConversion(inputArray: number[]): number {
    let result: number = 0, iterration: number = 0, newArray = [], newOld = [], iterateIt = true;

    do {
        iterration++;
        if (newOld.length == 0) {
            newOld = inputArray;
        }
        if (iterration % 2 == 0) {
            for (let i = 0; i < newOld.length; i = i + 2) {
                newArray.push(newOld[i]*newOld[i+1]);
            }
        } else {
            for (let i = 0; i < newOld.length; i = i + 2) {
                newArray.push(newOld[i]+newOld[i+1]);
            }
        }
        newOld = newArray;
        newArray = [];
        iterateIt = newOld.length>1 ? true : false;

    } while (iterateIt);

    result = newOld[0];

    return result;
}

function arrayConversion2(inputArray: number[]): number {
    let isOdd = true;

    while (inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }

    return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumArray: number[] = [];

    if(isOdd) {
        for (let i = 0; i < nums.length; i += 2) {
            sumArray.push(nums[i] + nums[i + 1]);
        }
    } else {
        for (let i = 0; i < nums.length; i += 2) {
            sumArray.push(nums[i] * nums[i + 1]);
        }
    }

    return sumArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
