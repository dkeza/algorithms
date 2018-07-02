function add(param1: number, param2: number): number {
    let result: number;
    result = param1 + param2;
    return result;
}

function add2(...param1: number[]): number {
    let result: number = 0;
    
    for (let el of param1) {
        result = result + el;
    }

    return result;
}
 console.log(add(1, 2));
 console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

