const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let possible = distanceToPump <= mpg * fuelLeft ? true : false; return possible;}

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
console.log(zeroFuel(100, 500, 1));
console.log(zeroFuel(100, 20, 5));
