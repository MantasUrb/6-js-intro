function strCount(str, letter) {  

let result = 0;

for (let i = 0; i < str.length; i++) {
    const strLetter = str[i];
        if (strLetter === letter) {
            result += 1;
        }
    }   
    return result;
}


console.log(strCount('Hello', 'o'), "->", 1);
console.log(strCount('Hello', 'l'), "->", 2);
console.log(strCount('', 'z'), "->", 0);
