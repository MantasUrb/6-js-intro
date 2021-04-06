function numberLenght(num) {
    //validacija
    if (typeof num !== 'number') {
        return 'Error: turi buti skaiciaus tipas'
    }

    if (!isFinite(num)) {
        return `Error: turi buti normalus skaicius, o ne NaN ar ${num}`;
    }

    //logic
    let digitsCount = ('' + num).length;

    //jei skaiciuje yra kablelis, tai -1
    if (num % 1 !== 0) {
        digitsCount--;
    }

    //jei skaicius yra neigiamas, tai -1
    if (num < 0) {
        digitsCount--;
    }

    // result return
    return digitsCount;
}

// console.log(numberLenght(true));
// console.log(numberLenght('asd'));
// console.log(numberLenght('asd888654'));
// console.log(numberLenght(NaN));
// console.log(numberLenght(Infinity));
// console.log(numberLenght(-Infinity));
// console.log(numberLenght([845]));
// console.log(numberLenght([8, 5]));
// console.log(numberLenght([true, false]));
// console.log(numberLenght(['asd', '85']));
// console.log(numberLenght([]));
// console.log(numberLenght(numberLenght));
// console.log(numberLenght());
// console.log(numberLenght(5), '->' ,1);
// console.log(numberLenght(781), '->' ,3);
// console.log(numberLenght(3700123456), '->' ,10);
// console.log(numberLenght(3.14), '->' ,3);
// console.log(numberLenght(-5), '->' ,1);
// console.log(numberLenght(-781), '->' ,3);
// console.log(numberLenght(-3700123456), '->' ,10);
// console.log(numberLenght(-3.14), '->' ,3);
// console.log(numberLenght(0), '->' ,1);
// console.log(numberLenght(-0), '->' ,1);

console.log(numberLenght(10000000000000000000000000000000000000000000000000000000), '->' ,68);
console.log(numberLenght(0.000000000000000000000000000000000000000000000000000001), '->' ,68);
