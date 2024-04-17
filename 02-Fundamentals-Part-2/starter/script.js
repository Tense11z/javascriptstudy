// ============================
'use strict'; // helps to trow errors 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;// will throw 'Uncaught ReferenceError: hasDriverLicense is not defined'
if (hasDriversLicense) console.log('I can drive');

const private = 'Audio' // will 'throw Unexpected strict mode reserved word'