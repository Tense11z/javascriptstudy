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
const now = 2037;
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
console.log(now - 1991 > now - 2018);