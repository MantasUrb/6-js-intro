function divide (weight) {
    if (weight > 2) {
        if (weight % 2 === 0) {
            return true
        }
    } return false
}

console.log(divide(4), true);
console.log(divide(2), false);
console.log(divide(5), false);
console.log(divide(88), true);
console.log(divide(100), true);
console.log(divide(67), false);
console.log(divide(90), true);
console.log(divide(10), true);
console.log(divide(99), false);
console.log(divide(32), true);