function doubleChar (str) {
    newStr = "";
    for (let a of str) {
        newStr += a.repeat(2);
    }
    return newStr
}

//ALTERNATIVE SOLUTION
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");