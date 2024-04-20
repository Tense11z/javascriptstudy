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
/*
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
*/

//=============================
/*
const friends = ['Michael', 'Steven', 'Peter']; //array declaration
console.log(friends)

const years = new Array(1991, 2005, 2001, 1999); //another way of array declaration
console.log(years)

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]) // display last element;

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonasArr = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonasArr, jonasArr.length);

//exercise
const calcAge = function (birthYear) { //function expression; cannot be called before declaration
    return 2037 - birthYear;
}

const birthYears = new Array(1991, 2005, 2001, 1999);

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
*/

//========================
// codingheroes arrays challenge
/*
const populations = [33, 67, 51, 22];
console.log(populations.length === 4);

function percentageOfWorld(population) { //declaration
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}
const percentages = new Array(percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[populations.length - 1]));
console.log(percentages);
*/

// ========================
/*
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // adds new element at the end of an array
console.log(friends);

friends.unshift('John');// adds new element at the beggining of an array
console.log(friends);

friends.pop(); // removes last element from an array
console.log(friends);

friends.shift(); // removes first elemnt from an array
console.log(friends);

console.log(friends.indexOf('Steven')); // returns element's position
console.log(friends.indexOf('Bob')); // returns -1 for element that is not in array

console.log(friends.includes('Steven')); // returns true if element in array otherwise - false
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) { // usecase of .includes method
    console.log('You have a friend called Peter');
}
*/
// udemy arrays challenge
/*
Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
const calcTip = function (bill) { // should be : return bill >-50 && bil <=300 ? bill * 0.15 : bill * 0.2
    if (bill >= 50 && bill <= 300) {
        return bill / 100 * 15;
    } else {
        return bill / 100 * 20;
    }
}

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
*/
// codingheroes arrays challenge
/*
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */
/*
const neighbours = new Array('Austria', 'France', 'Italy', 'Deustchland');
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany') && !neighbours.includes('Deustchland')) {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Italy')] = 'Spain';
console.log(neighbours);
*/

// =========================
/*
const jonasArray = new Array('Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']);

const jonas = { firstName: 'Jonas', lastName: 'Schmedtmann', age: 2037 - 1991, job: 'teacher', friends: ['Michael', 'Peter', 'Steven'] }; // creating objects(dictionaries);

// codingheroes Objects challenge

const myCountry = { country: 'France', capital: 'Paris', language: 'French', population: 68, neighbors: ['Germany', 'Untide Kingdom', 'Belgium', 'Switzerland', 'Spain', 'Italy'] };
console.log(myCountry);*/

// =========================
/*
const jonas = { firstName: 'Jonas', lastName: 'Schmedtmann', age: 2037 - 1991, job: 'teacher', friends: ['Michael', 'Peter', 'Steven'] };
console.log(jonas);

console.log(jonas.lastName); // retrieving last name from Object
console.log(jonas['lastName']); // retrieving last name from Object another way;

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! hoose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//challenge at the end of the lecture#43

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

// codingheroes dot vs bracket notation

const myCountry = { country: 'France', capital: 'Paris', language: 'French', population: 68, neighbors: ['Germany', 'Untide Kingdom', 'Belgium', 'Switzerland', 'Spain', 'Italy'] };
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);