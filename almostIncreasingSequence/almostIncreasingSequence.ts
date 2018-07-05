function almostIncreasingSequence(sequence: number[]): boolean {
    let result: boolean = true, errorsFound: number = 0, counter: number = 0;
    
    // Set counter to first element in array
    counter = sequence[0];

    for (let i = 0; i < sequence.length; i++) {
        if (errorsFound > 1) {
            // If more then one error is found, exit for loop, for optimization
            break;
        }
        if (sequence[i] !== counter) {
            // Increase error counter variable, and go to next element in array
            errorsFound++;
            continue;
        }
        // Increase counter, to be compared to next element in array
        counter++;
     }
    if (errorsFound > 1) {
        result = false;
    }

    return result;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([-3, -2, -2, -1, 0, 1, 2, 3])) 
console.log(almostIncreasingSequence([1, 4])) 