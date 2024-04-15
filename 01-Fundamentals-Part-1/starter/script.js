/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = 'Jonas';
let first_name = 'Jake';
let $first_name = 'Jessica';
let PI = 3.1415
console.log(firstName);
console.log(first_name);
console.log($first_name);
console.log(PI);
*/
/*let javascriptIsFun = true; // declearing boolean variable
console.log(javascriptIsFun); // printing boolean variable

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas')

javascriptIsFun = 'YES!';

// console.log(javascriptIsFun)
console.log(typeof javascriptIsFun);

let year; // declearing undefined variable
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year); */

/*let age = 24; // declaring mutable variable
const birthYear = 1999; // declaring constant variable; const cannot be empty
var job = 'programmer'; // legacy approach tp declare mutable variable*/

// math operators and operations
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // incrementing ; the same is possible using different opperators
x++; // incrementing on 1
console.log(x);

// comparison operators and  operations

console.log(ageJonas > ageSarah); // >, <, >=, <=, ===
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);*/

// operator precedence 
/*let x, y;
x = y = 25 - 10 - 5; // x = y = 10; x = 10;
console.log(x, y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)*/

/*// code challenge#1 
let massMark = 78, massJohn = 92, heightMark = 1.69, heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn)

let markHigerBMI = BMIMark > BMIJohn

console.log(markHigerBMI)*/

/*// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log('String with \nmultiple \nlines written in 1 row')

console.log('String with \n\
 multiple \n\
 lines written in multiple rows')

console.log(`Multiple
lines 
whithout \\n `)*/

/*// if statements

const age = 18, ageS = 15;
const isOldEnough = age >= 18;

if (isOldEnough) { // we are using boolean variable as condition
    console.log('Sarah can start driving license 🚗')
}

if (ageS >= 18) { // condtion is written explicitly
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - ageS;
    console.log(`Sarah is not old enough to start driving license ❌. Wait another ${yearsLeft} years.`)
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)*/

/*// code challenge#2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
} */

const inputYear = '1991';
console.log(inputYear + 18) // string + number = string
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23); // converting Number to String

// type coercion
console.log('I am ' + 23 + ' years old')
console.log(4 - '23' - '10' - 3); // string - number  or number - string = number
console.log('23' * '2', 2 ** '2', 29 / '4', 4 + '5'); // seems like only '+' converts numbers to strings