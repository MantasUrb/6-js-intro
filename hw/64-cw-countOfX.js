function countBy(x, n) {
  let sum = 0;
  let arr = [];
    for (let i = 0; i < n; i++) {
      sum += x;
      arr.push(sum);
    }
    return arr;
}


console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
console.log(countBy(2,5), [2,4,6,8,10], "Array does not match")

//Alternative solution

// function accum(s) 
// {return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');}