const prisistatyk = ({ name = 'Nezinia kas', city = 'Nezinia kur'}) => {
    const text = `Sveiki, as ${name} ir gyvenu ${city}`;
    console.log(text);
}

// function prisistatyk({ name, city}) {
//     const text = `Sveiki, as ${name} ir gyvenu ${city}`;
//     console.log(text);

// }

prisistatyk({ name: 'Petras', city: 'Antarktida' });
prisistatyk({ name: 'Maryte', city: 'Malibu' });
prisistatyk({ name: 'Tomas'});
prisistatyk({});

function sandauga (a = 1, b = 1) {
    return a * b;
}

console.log(sandauga(8, 5));
console.log(sandauga(8));
console.log(sandauga());