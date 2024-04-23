// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temps = new Array(17, 21, 23);
const temps2 = new Array(12, 5, -5, 0, 4);

const printForecast = function (arr) {
  let outprint = "... ";
  for (let i = 0; i < arr.length; i += 1) {
    outprint += `${arr[i]} in ${i + 1} days ...`;
  }
  console.log(outprint);
};

printForecast(temps);
printForecast(temps2);
