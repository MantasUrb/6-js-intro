const a = 8;
const b = 5;


//ternary variantas
console.log( a > b ? 'taip' : 'ne');

//if-else variantas
if ( a > b ) {
    console.log('taip');
}   else {
    console.log('ne');
}


const age = 50;
const ageLimit = 18;

const status = age >= ageLimit ? 'galiu' : 'dar per jaunas';
console.log(status);

const kelias = 199;
const bake = 200;

const arPasieksiuPalanga = kelias > bake ? 'Sorry' : 'yupkae!';
console.log(arPasieksiuPalanga);

const koksSkaicius = 2 < 3 ? 4 < 5 ? 6 : 7 : 8;
console.log(koksSkaicius);