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
//const stringArray = newList;

console.log(
  "newList: " + newList + " line 31 -- this should show the new list"
);
console.log();

// at this point, newList is undefined. I want to pass newList from the jile read function

const stringArray = [
  "sixrrmlkptmc18zhvninek",
  "jcb82eightwond",
  "twofourthree778nineeight",
  "sqpxs1cgcrmctlgqvzxbcjzgr",
  "nqkjxbmbpkz9eight8",
  "one6fourfiveqndtrvgkkgthppnine",
  "zbrbdpbfcfxcqq5oneninejfgqpkfn",
  "hvlstzgvmjfivefourqjqtxdjmbxfour4four2",
  "13dzbmbtl6",
];

console.log("stringArray (hard coded): " + stringArray);
console.log("----");
console.log("newList: " + newList + " line 47");
console.log();

console.log("----");
let firstDigit = null;
let lastDigit = null;

function digits(string) {
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(string[i]) && string[i] != " ") {
      firstDigit = string[i];
      break;
    }
  }

  for (var j = string.length; j > 0; j--) {
    if (!isNaN(string[j]) && string[j] != " ") {
      lastDigit = string[j];
      break;
    }
  }

  let total = firstDigit + lastDigit;

  //  console.log(firstDigit, lastDigit, total);
  return total;
}

let answer = +"0";
let runningTotal = +"0";

console.log("running totals ");

readFile((newList) => {
  console.log(
    "callback list: " + newList + " line 77 -- this should show the list"
  );
  console.log();
});

for (const string of stringArray) {
  //  console.log(string);
  let prevTotal = runningTotal;
  answer = Number(digits(string));
  runningTotal = prevTotal + answer;
  console.log(runningTotal);
}
