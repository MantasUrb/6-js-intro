const reverseSeq = n => { 
  let arr = [];
  for(let i = n; i >= 1; i--){
    arr.push(i)
  }
  return arr;
}

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);