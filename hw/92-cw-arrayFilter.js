function getEvenNumbers (numbersArray) {
  newArr = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      newArr.push(numbersArray[i])
    } 
  } return newArr;
}

//ALTERNATIVE SOLUTION
// const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);


console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
console.log(getEvenNumbers([1,2]), [2])
console.log(getEvenNumbers([12,14,15]), [12,14])
console.log(getEvenNumbers([13,15]), [])
console.log(getEvenNumbers([1,3,9]), [])