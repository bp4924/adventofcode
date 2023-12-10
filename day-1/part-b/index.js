const fs = require("fs");

let newList = [];

// load list
function readFile(callback) {
  fs.readFile("./day-1/part-b/list.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var list = data.split("\r\n");

    console.log("item count: " + list.length);
    console.log("new List (from text file): " + list);
    callback(list);
  });
}

console.log("----");

function parseString(str) {
  const wordToDigit = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let result = "";
  const words = str;
  for (let i = 0; i <= words.length; i++) {
    if (words[i] == " ") {
      console.log("end of string");
      break;
    }
    if (isNaN(words[i])) {
      console.log("letter");
      console.log("item = " + words[i]);
      break;
    } else {
      console.log("digit");
      console.log("item = " + words[i]);
      result += wordToDigit[words[i]];
    }
  }
  console.log(result);

  return result;
}

console.log(parseString("twoonenine")); // Output: 219

function digits(string) {
  let firstDigit = 0;
  let lastDigit = 0;

  //  const str = "4nineeightseven2";
  /*
  const numbers = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      numbers.push(charCode - 48);
    }
  }
  console.log(numbers);
  return numbers;
  */

  for (var i = 0; i < string.length; i++) {
    console.log("character: " + string[i]);
    if (!isNaN(string[i]) && string[i] != " ") {
      firstDigit = string[i];
      break;
    }
  }

  for (var j = string.length; j >= 0; j--) {
    if (!isNaN(string[j]) && string[j] != " ") {
      lastDigit = string[j];
      break;
    }
  }
  let total = firstDigit + lastDigit;
  console.log(firstDigit, lastDigit, total);

  if (firstDigit === 0 && lastDigit === 0) {
    total = 0;
    console.log(">>>>");
    console.log("no digits");
  }
  return total;
}

let answer = +"0";
let runningTotal = +"0";

console.log("running totals ");

readFile((newList) => {
  console.log();
  //    "callback list: " + newList + " line 77 -- this should show the list"
  console.log();

  const stringArray = newList;
  for (const string of stringArray) {
    //    let stringN = parseString(string);
    console.log(string);
    let prevTotal = runningTotal;
    answer = Number(digits(string));
    runningTotal = prevTotal + answer;
    console.log("running total: " + runningTotal);
  }
});
