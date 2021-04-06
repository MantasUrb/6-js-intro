/*
for () {}
*/

// kaip pereiti per sarasa
const marks = [10, 2, 8, 4, 6, 5, 6, 7];
console.log(marks);

for (let i = 0; i < marks.length; i++) {
    const skaicius = marks[i];
    console.log(skaicius);
}

console.log('.......................');


// pereiti per intervala imtinai 

const nuo = 5;
const iki = 10;

for (let i = nuo; i <= iki; i++) {
    console.log(i);
}

console.log('.......................');

// pereiti per intervala imtinai atbulai

const nuo2 = 8;
const iki2 = 4;

for (let i = nuo2; i >= iki2; i--) {
    console.log(i);
}

console.log('.......................');

// teksto ilgis ir i-oji raide

const hi = 'labas';

for (let i = 0; i < hi.length; i++ ) {
    const raide = hi[i];
    console.log(raide);
}

console.log('.......................');

const num1 = 15;
const div = 3;

const rem = num1 % div;
console.log(rem);
