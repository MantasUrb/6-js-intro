function remainder (a, b) {
    if (a > b || a == b) {return a % b}
    if (b > a) {return b % a}
}

// ALTERNATIVE SOLUTION 

// function remainder(a, b){
//     return a > b ? a % b : b % a;
//   }

console.log(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.');
console.log(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
console.log(remainder(1, 0)), 'Divide by zero should return NaN';
console.log(remainder(0, 0)), 'Divide by zero should return NaN';