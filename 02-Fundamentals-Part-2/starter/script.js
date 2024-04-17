// ============================
/*'use strict'; // helps to trow errors 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;// will throw 'Uncaught ReferenceError: hasDriverLicense is not defined'
if (hasDriversLicense) console.log('I can drive');

const private = 'Audio' // will 'throw Unexpected strict mode reserved word'
*/

// ============================

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