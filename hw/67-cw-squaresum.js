function squareSum (numbers) {return numbers.reduce((sum, x) => sum + Math.pow(x, 2), 0)};

// function squareSum (numbers) {
//     let sum = 0; 
//     for (let a of numbers) {
//         b = Math.pow(a, 2);
//         sum += b;
//     } 
//     return sum;
// }

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([4, 5, 5]), 66);
console.log(squareSum([2, 2]), 8);
console.log(squareSum([2, 2, 2]), 12);