function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let result: boolean = false, yourStrongestArm: number = 0, yourWeakestArm: number = 0, friendsStrongestArm: number = 0, friendsWeakestArm: number = 0;
    yourStrongestArm = Math.max(yourLeft, yourRight);
    yourWeakestArm = Math.min(yourLeft, yourRight);
    friendsStrongestArm = Math.max(friendsLeft, friendsRight);
    friendsWeakestArm = Math.min(friendsLeft, friendsRight);
    if (yourStrongestArm === friendsStrongestArm && yourWeakestArm === friendsWeakestArm) {
        result = true;
    }
    return result;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
