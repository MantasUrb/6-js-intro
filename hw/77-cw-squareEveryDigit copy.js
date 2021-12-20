function squareDigits (num) {
  let total = '';
  for (const c of num.toString()) {
    total += Math.pow(c, 2);
  }
  return Number(total);
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);