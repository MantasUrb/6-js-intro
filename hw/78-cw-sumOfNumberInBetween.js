// function getSum(a, b) {
//   let sum = 0;
//   if (a < b) {for (let i = a; i <= b; i++) {sum += i;}};
//   if (a > b) {for (let i = b; i <= a; i++) {sum += i;}};
//   if (a == b) {return a};
//   return sum;
// }

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(1, 3), 6);
console.log(getSum(5, 7), 18);
console.log(getSum(-3, -2), -5);
console.log(getSum(0, -5), -15);
console.log(getSum(-1, 2), 2);
console.log(getSum(2, 2), 2);

//ALTERNATIVE SOLUTION

function getSum(a,b){return (Math.abs(a - b) + 1 ) * (a+b) / 2;}