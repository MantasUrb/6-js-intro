// Ciklo FOR panaudojimas - pradzia
// 1 uzduotis

const nuo = 5;
const iki = 7;
let sum = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        sum += i;
    }
}
console.log(sum);

console.log('..............')

// 2 uzduotis

const x = 'sula';

for (let i = x.length - 1; i <= x.length; i--) {
    if ( i < 0 ) { break; }
    const raide = x[i];
    console.log(raide);
}

console.log('..............')

// 3 uzduotis

const start = 0;
const end = 11;
const daliklis = 3;
let viso = 0;

for (let z = start; z <= end; z++) {
    if (z % daliklis === 0) {
    viso++;
    }
}
console.log(`Skaičių intervale tarp ${start} ir ${end}, 
besidalijančių be liekanos iš ${daliklis} yra ${viso} vienetai.`);

console.log('..............')

//Ciklo FOR panaudojimas - pabaiga


