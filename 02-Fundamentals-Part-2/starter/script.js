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
/*
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
*/

// codingheroes Function Declarations vs. Expressions challenge
/*
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
*/

//============================
/*
const calcAge1 = birthYear => 2037 - birthYear;
const age1 = calcAge1(1991);
console.log(age1)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'))

//============================

function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3))

// codingheroes Arrow Functions challenge

function percentageOfWorld1(population) { //declaration
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const percentageOfWorld3 = population => {
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

const countryPercentage3 = percentageOfWorld3(27);
console.log(countryPercentage3)

// codingheroes Functions Calling Other Functions challenge

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world'`
}

const describeUkraine = describePopulation('Ukraine', 33);
console.log(describeUkraine)
*/

// =============================

/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3; // this should be calcAverage = score1, score2, score3) => (score1 + score2 + score3) / 3
    return average
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins * 2 >= avgKoalas) {
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgDolphins < avgKoalas && avgDolphins * 2 <= avgKoalas) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        return console.log('No team wins...')
    }
}