/*
switch () {
    case:
        break;
    default:
        break;
}
*/

const day = 1;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        break;

    default:
        console.log('Nezinau tokios dienos');
        break;
}


const day2 = 5;

switch (day2) {
    case 1: 
    case 2: 
    case 3:
    case 4: 
    case 5: 
        console.log('Darbo diena');
        break;

    case 6: 
    case 7: 
        console.log('Savaitgalis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera')
        break;
}

console.log('.....................')

/* 

PROCESAS:
1 - paimti puodeli
2 - ideti arbatos pakeli
3 - isideti cukraus
4 - ipilti vandens
5 - ismaisyti
6 - gerti

*/

const processStep = 5;

switch (processStep) {
    case 1: 
        console.log('Paimti puodeli');


    case 2:
        console.log('Ideti arbatos puodeli');


    case 3:
        console.log('isideti cukraus');


    case 4:
        console.log('ipilti vandens');


    case 5:
        console.log('ismaisyti');


    case 6:
        console.log('gerti');
        break;
    
    default:
        console.log('neimanoma atlikti veiksmo');
        break;
}

console.log('.....................')

const stop = 'Vilnius';

switch (stop) {
    case 'Vilnius': console.log('Vilnius');
    case 'Elektrenai': console.log('Elektrenai');
    case 'Kaunas': console.log('Kaunas');
    case 'Jonava': console.log('Jonava');
    case 'Telsiai': console.log('Telsiai');
    case 'Klaipeda': console.log('Klaipeda');
        break;

    case 'Mazeikiai': console.log ('Mazeikiai');
    case 'Siauliai': console.log ('Siauliai');
    case 'Panevezys': console.log ('Panevezys');
    case 'Moletai': console.log ('Moletai');
    case 'Vilnius': console.log ('Vilnius');
        break;

        default: console.log('Nera tokio miesto');
}