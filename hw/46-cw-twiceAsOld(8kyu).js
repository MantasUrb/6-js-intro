function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld > sonYearsOld * 2) {return dadYearsOld - sonYearsOld * 2}
    if (dadYearsOld < sonYearsOld * 2) {return Math.abs(dadYearsOld - sonYearsOld * 2)}
    else {return 0}}


console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);
console.log(twiceAsOld(22,1) , 20);
console.log(twiceAsOld(29,0) , 29);
