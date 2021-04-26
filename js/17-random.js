/* 

Reikia sukurti 10-ies nariu sarasa is skirtingu atsitiktiniu skaiciu intervale tarp 0 ir 9

Math.random() grazina skaicius intervale [0..1) -> 0 .... 0.999999999

*/

// const random = [];

// for (let i=0; i<10; i++){
//     random.push(Math.random() * 10);
// }
// console.log(random);


function randomNumber () {
    return Math.floor(Math.random() * 10);
}

const random = [];

while (random.length < 7) {
    const num = randomNumber();
    if (!random.includes(num)) {
        random.push(num)
    }
}

console.log(random);