function letters(text, step) {
    //input validation
    if (typeof text !== 'string') {
        return `ERROR: Pirmasis kintamasis yra netinkamo tipo`;
    }

    if (typeof step !== 'number') {
        return `ERROR: Pirmasis kintamasis yra netinkamo tipo`;
    }

    if (!isFinite(step)) {
        return `ERROR: antrasis kintamasis yra ne normalus skaicius`;
    }

    if (text.length < step) {
        return `ERROR: zingsnis negali buti didesnis uz teksto ilgi`;
    }

    if (step === 0) {
        return `ERROR: zingsnis negali buti lygus 0`;
    }

    if (step % 1 !== 0) {
        return `ERROR: zingsnis negali buti desimtainis skaicius`;
    }


    //logic
    let result = '';

    for ( i = step - 1; i < text.length; i += step) {
            result += text[i];     
    }

    //post logic validation




    //result return
    return result;
}


console.log(letters(1561, 2));
console.log(letters(1561, 'asd'));
console.log(letters('asdfb', Infinity));
console.log(letters('asdfb', NaN));
console.log(letters('abc', 4));
console.log(letters('abc', 0));
console.log(letters('abc', 1.5));

console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');

// console.log(letters('abcdefg', -2), '->', 'fdb');
// console.log(letters('abcdefghijkl', -3), '->', 'jgda');











/*
  _  _  _  _
adcdefghijkl     3 -> cfil

 _ _ _ _ _ _
adcdefghijkl     2 -> bdfhjl

____________
adcdefghijkl     1 -> adcdefghijkl


adcdefghijkl     0 -> net neegzistuoja nuline raide...

*/