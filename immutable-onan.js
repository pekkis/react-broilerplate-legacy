import { default as I, List, Map, Range, Repeat } from 'immutable';

// Array literal
const losos = [
    {
        name: 'Panu',
        age: 27,
        visible: true,
        generation: 2,
    },
    {
        name: 'Panun isä',
        age: 70,
        visible: true,
        generation: 1,
    },
    {
        name: 'Panun äiti',
        age: 42,
        visible: true,
        generation: 1,
    },
    {
        name: 'Panun sisko',
        age: 24,
        visible: true,
        generation: 2,
    },
    {
        name: 'Panun salainen lapsi',
        age: 3,
        visible: false,
        generation: 3
    }
];

// Object literal
const cities = {
    helsinki: {
        name: 'Helsinki',
        population: 500000,
        bestness: 70,
    },
    turku: {
        name: 'Turku',
        population: 150000,
        bestness: 40,
    },
    tampere: {
        name: 'Tampere',
        population: 200000,
        bestness: 50,
    },
    vantaa: {
        name: 'Vantaa',
        population: 250000,
        bestness: 100,
    },
    espoo: {
        name: 'Espoo',
        population: 300000,
        bestness: 50
    }
};

// List === Array
let losolist = List(losos);

const dontRevealSecrets = losolist
    .filter(loso => loso.generation <= 3)
    .groupBy(loso => loso.generation);

console.log(dontRevealSecrets);

// Map === Object
let citymap = Map(cities);

let helsinki = citymap.get('helsinki');

citymap = citymap.set('kouvola',
    {
        bestness: 0,
        name: 'Kouvola',
        population: undefined
    }
);

const numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 5, 6, 4, 7, 8, 3, 7, 3, 8, 8, 4, 3, 5, 1, 7, 5, 4, 3, 8, 9, 0);

const ret = numbers
    .groupBy(n => n)
    .map(numbers => numbers.count())
    .sortBy(n => n)
    .reverse()
    .keySeq()
    .toList()
    .first();


console.log(ret);

const range = Range(0, 1001, 10);

range.forEach(numbah => {
    console.log(numbah);
});


// console.log(citymap);











































