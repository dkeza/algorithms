function areSimilar(a: number[], b: number[]): boolean {
    let result: boolean = false, diffs = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diffs.push(i);
        }
    }

    result = (diffs.length == 0 || (diffs.length == 2 && a[diffs[0]] == b[diffs[1]] && b[diffs[0]] == a[diffs[1]]));
    
    return result;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
