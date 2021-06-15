function find_average(array) {return array.reduce((sum, number) => sum + number, 0) / array.length}



console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);
