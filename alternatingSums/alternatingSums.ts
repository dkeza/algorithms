function alternatingSums(a: number[]): number[] {
    let result: number[] = [0,0];
    for (let i = 1; i <= a.length; i++) {
        if (i%2==0) {
            result[1] += a[i-1];
        } else {
            result[0] += a[i-1];
        }
    }
    return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))