function fakeBin(x) {
    let temp = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {temp += "0"};
        if (x[i] >= 5) {temp += "1"};
    }
    return temp;
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

//Alternative solution
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }