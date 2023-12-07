const fs = require("fs");

let newList = [];

function readFile(callback) {
  fs.readFile("./day-1/part-a/list.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var list = data.split("\r\n");

    console.log("item count: " + list.length);
    //    console.log("new List (from text file): " + list);
    callback(list);
  });
}

console.log("----");
//let firstDigit = null;
//let lastDigit = null;

function digits(string) {
  let firstDigit = 0;
  let lastDigit = 0;

  for (var i = 0; i < string.length; i++) {
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
    console.log(string);
    let prevTotal = runningTotal;
    answer = Number(digits(string));
    runningTotal = prevTotal + answer;
    console.log(runningTotal);
  }
});
