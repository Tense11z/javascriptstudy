// ============================
/*'use strict'; // helps to trow errors 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;// will throw 'Uncaught ReferenceError: hasDriverLicense is not defined'
if (hasDriversLicense) console.log('I can drive');

const private = 'Audio' // will 'throw Unexpected strict mode reserved word'
*/

// ============================
/*
function logger() {
    console.log('My name is Jonas');
}

logger(); // calling / running / invoking function

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
*/

// codingheroes functions challenge
/*
function describeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const Description = `${country} has ${population} million people and its capital city is ${capitalCity}. \n`;
    return Description
}

const countryDescription1 = describeCountry('Ukraine', 38, 'Kyiv');
const countryDescription2 = describeCountry('France', 67, 'Paris');
const countryDescription3 = describeCountry('Republic of Korea', 51, 'Seoul');
console.log(countryDescription1, countryDescription2, countryDescription3)
*/

//============================

function calcAge1(birthYear) { // function declaration; can be called before declaration
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) { //function expression; cannot be called before declaration
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// codingheroes Function Declarations vs. Expressions challenge

function percentageOfWorld1(population) { //declaration
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const ukrainianPopulationPercentage1 = percentageOfWorld1(33);
const francesPopulationPercentage1 = percentageOfWorld1(67);
const republicOfKoreaPopulationPercentage1 = percentageOfWorld1(51);

console.log(ukrainianPopulationPercentage1, francesPopulationPercentage1, republicOfKoreaPopulationPercentage1);

const percentageOfWorld2 = function (population) { //declaration
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}
const ukrainianPopulationPercentage2 = percentageOfWorld2(33);
const francesPopulationPercentage2 = percentageOfWorld2(67);
const republicOfKoreaPopulationPercentage2 = percentageOfWorld2(51);
console.log(ukrainianPopulationPercentage2, francesPopulationPercentage2, republicOfKoreaPopulationPercentage2);