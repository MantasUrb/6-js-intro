/*
Iniciavimas - vietos isskyrimas kompiuterio atmintyje.

KINTAMUJU INICIAVIMO BUDAI:
const - konstanta; kintamasis, kurio reiskme negali buti keiciama;
let - kintamasis, kurio reiksme gali buti keiciama;
var - kintamasis, kurio reiksme gali buti keiciama, taciau nerekomenduojama naudoti;

KINTAMUJU TIPAI:
tekstas - (string) - rasomas tarp kabuciu;
skaicius - (number) - rasomi skaiciai;
sarasas/masyvas/listas/arejus - (array) - sarasas reiksmiu, kuriu tipas gali buti betkoks,
taciau rekomenduotina, kad sarasa sudarytu vieno tipo reiksmes
*/

const name = 'Petras';
console.log(name);

const lastName = 'Pavardenis'
console.log(lastName);

let balance = 99;
console.log(balance);

const currency = 'eur';
console.log(currency);

balance = 999;
balance = 10;
balance = -10;
console.log(balance);

const skaicius1 = 5;
console.log(skaicius1)

const skaicius2 = 7.46;
console.log(skaicius2)

const skaicius3 = -34.4;
console.log(skaicius3);

const pazymiai = [10, 2, 8, 6, 4];
console.log(pazymiai);

const studentai = ['Petriukas', 'Onute', 'Maryte', 
'Jonukas', 'Alphe', 'Ra']
console.log(studentai);