function cost (mins) { 
  if (mins <= 65) {return 30}
  if (mins > 65) {
    const overtime = mins - 65;
    let extrapay = Math.ceil(overtime / 30) * 10;
    return extrapay + 30 
    } return extrapay;
}

//ALTERNATIVE SOLUTION
// function cost (mins) { 
//   return 30 + ( mins>65 ?  Math.ceil((mins-65)/30) : 0 )*10
// } 


console.log(cost(45),30);
console.log(cost(63),30);
console.log(cost(104),40);
console.log(cost(102),50);
console.log(cost(273),100);