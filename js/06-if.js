/*
IF - salygos sakinys, kuris atsako i klausima: true arba false.

Galimi sablonai
if () {}
if () {} else {}
if () {} else if () {} ... else if () {} else


Palyginimo operatoriai:
- galimi: <, >, <=, >=, ==, ===, !=, !==;
- naudotini: <, >, <=, >=, ===, !==;
- nenaudotini: ==, !=    nes netikrina, ar suderinami tipai;

Grazinamos reiksmes:
true (boolean)
false (boolean)

*/

const a = 4;
const b = 8;

if ( a < b ) {
    console.log(`a yra maziau uz b`);
}

if ( a > b ) {
    console.log(`a yra daugiau uz b`);
}

if ( a == b ) {
    console.log(`a yra lygu b`);
}

const c = 5;
const d = 9; 

if (c <= d) {
    console.log('c maziau arba lygu uz d');
}  else {
    console.log('c daugiau uz d');
}

const e = '88';
const f = 88;

if (e === f) {
    console.log('e lygu f');
}   else {
    console.log('e Ne lygu f');
}

console.log('....................');

const akys = 'geltonos';

if (akys === 'melynos') {
    console.log('Oj koks/kokia fainulka');
}   else if (akys === 'zalios') {
    console.log('Oj koks/kokia protinga');
}   else if (akys === 'rudos') {
    console.log('fu fu fu.... melagis');
}   else if (akys === 'raudonos') {
        console.log('taigi programeris... :D')
}   else {
    console.log('Sorry, negaliu pagirti, nes nezinau tokios spalvos akiu')
}

console.log('....................');

// logikos nestinimas - logikos strukturos rasymas viduje (neribotai)

const city = 'asds';

if (city === 'Vilnius') {
    console.log('Sveiki atvyke i Vilnius;)');
}   else {
    if (city === 'Kaunas') {
        console.log('Sveiki atvyke i Kauna!');
    }   else {
        if (city === 'Minskas') {
            console.log('Sveiki atvyke i Minska!');
        }   else {
            console.log('Sveiki atvyke i kazkoki nezinoma miesta!');
        }
    }
}

console.log('....................');

/*
jei duosim:
- NaN - false;
- Infinity arba -Infinity - true;
- teigiama arba neigiama skaiciu - true;
- nulis - false;
- tuscias tekstas - false;
- ne tuscias tesktas - true;
- bet koks array - true;
- undefined - false;
*/

const arMokausi = true;

if (arMokausi) {
console.log('Taip ir toliau!')
} else {
    console.log('Pailseti irgi reikia... :)')
}
