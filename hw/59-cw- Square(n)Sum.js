let squareSum = numbers => numbers.reduce((sum, x) => sum + Math.pow(x, 2));

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);


// function squareSum (numbers) {return Math.pow(numbers.reduce((sum, x) => sum + x), 2)};
