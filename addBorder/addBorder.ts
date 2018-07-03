function addBorder(picture: string[]): string[] {
    // Expecting that all strings in array have same length

    // Get length from first element, and use it to create first and last row
    let length = picture[0].length + 2;

    // Add left and right side of wall to each element
    for (let i=0;i<picture.length;i++) {
        picture[i] = "*" + picture[i] + "*";
    }

    // Add front and back wall
    picture.unshift("*".repeat(length));
    picture.push("*".repeat(length));
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));