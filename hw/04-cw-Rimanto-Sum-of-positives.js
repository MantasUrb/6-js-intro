function positiveSum(arr) {
let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];        
        if (number < 0) {
            continue;
        }
        sum += number;  
    } 
    return sum;  
}


console.log(positiveSum([1,2,3,4,5]), '->', 15);
console.log(positiveSum([1,-2,3,4,5]), '->', 13);
console.log(positiveSum([]), '->',0);
console.log(positiveSum([-1,-2,-3,-4,-5]), '->', 0);
console.log(positiveSum([-1,2,3,4,-5]), '->', 9);