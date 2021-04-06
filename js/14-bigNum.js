function bigNum(list) {
    //input validation
    if (!Array.isArray(list)) {
        return `Error: turi buti array tipo reiksme`
    }

    if (list.length === 0) {
        return `Error: array negali buti tuscias`
    }

    //logic
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        
        //jei ne  normalus skaicius, tai praleidziam ir einam ties kitu
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        
        if (number > biggest) {                 
            biggest = number;                  
        }
    }

    //post logic validation

    if (biggest === -Infinity) {
        return `Array neturi nei vienos normalios reiksmes (skaiciaus)`;
    }

    //result retur
    return biggest;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(true));
console.log(bigNum('asd'));
console.log(bigNum('asd888654'));
console.log(bigNum(NaN));
console.log(bigNum(Infinity));
console.log(bigNum(-Infinity, 2));
console.log(bigNum([]));
console.log(bigNum([[true], -2]));
console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18 ]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-1, -2, [true]]), '->', -1);
console.log(bigNum([false, -2, -3, -4]), '->', -2);
console.log(bigNum([[845, 8855], -2]), '->', -2);
console.log(bigNum([[''], -2]), '->', -2);
console.log(bigNum([[true, false], -2]), '->', -2);
console.log(bigNum([[], -2, -3, -4]), '->', -2);
console.log(bigNum([Infinity, NaN, false, true, '', "asd", [], undefined]));




