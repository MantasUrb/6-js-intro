// function arrayPlusArray (arr1, arr2) {
//     sum = 0; sum1 = 0; sum2 = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum1 += arr1[i];  
//     } 
//     for (let i = 0; i < arr2.length; i++) {
//         sum2 += arr2[i]; 
//     } 
//     return sum = sum1 + sum2;
// }

// ALTERNATIVE SOLUTION
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }


// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);