function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1;
    if (a - margin > b) return 1;
    return 0;
  }


console.log(closeCompare(4, 5), -1);
console.log(closeCompare(5, 5), 0);
console.log(closeCompare(6, 5), 1);
console.log(closeCompare(2, 4), -1);
console.log(closeCompare(2, 5, 3), 0);
console.log(closeCompare(8.1, 5, 3), 1);
console.log(closeCompare(1.99, 5, 3), -1);


// Alternative solution

//      const closeCompare = (a, b, margin = 0) =>
//          Math.abs(a - b) <= margin ? 0 : Math.sign(a - b)