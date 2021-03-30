/* 
Galimi variantai, kaip inicijuoti teksta:
- viengubos kabutes - 
- dvigubos kabutes
- backtick `

Rekomendacija:
- viengubos ir dvigubos tik jei inicijuojate tekstini kintamaji ir 
informacija yra viena eilute;
- backtick'ai (`) yra visi kiti atvejai t.y. darbas su tekstais,
multi-line ir kt.;

Jei reikia "eskeipinti" (escape) kabutes, pries jas padedame (\)
Specialieji simboliai:
\n - sukuria "enter"

*/

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

// Cia yra vienguba (') kabute.
const kabute1 = "Cia yra vienguba (') kabute."
console.log(kabute1);


// Cia yra dviguba (") kabute.
const kabute2 = 'Cia yra dviguba (") kabute.'
console.log(kabute2);

// Cia yra dviguba (") ir vienguba (') kabutes.
const kabute21 = 'Cia yra dviguba (\") ir vienguba (\') kabutes.';
console.log(kabute21);

// Cia yra vienguba (') ir dviguba (") kabutes.
const kabute12 = 'Cia yra vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12);

const fullName = vardas + ' ' + pavarde;
console.log(fullName)

const marke = 'Tesla';
const model = 'S';
const battery = 100;
const batteryUnits = 'kW';

// I wish I had Tesla model S with a 100kw battery. 
const car = 'I wish I had ' + marke + ' model ' + model + ' with a ' + battery + batteryUnits + '.';
console.log(car);

const ba2 = `I wish I had ${marke} model ${model} with a ${battery + batteryUnits}.`;
console.log(ba2);

// Cia yra dviguba (") ir vienguba (') ir backtick (`) kabutes.
const backKabute210 = `Cia yra dviguba (") ir vienguba (') ir backtick (\`) kabutes.`;
console.log(backKabute210);

const head = '<head>\n\
    <meta charset="UTF-8">\n\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
    <title>JS Intro</title>\n\
</head>';
console.log(head);

const headBack = `<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JS Intro</title>
</head>`
console.log(headBack);