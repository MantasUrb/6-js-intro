function quarterOf (month) {
    if (month <= 3) {return 1;}
    if (month > 3 && month <= 6) {return 2;}
    if (month > 6 && month <= 9) {return 3;}
    if (month > 9) {return 4;}
  }

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)

// Alternative solution

// const quarterOf = m => Math.ceil(m/3);