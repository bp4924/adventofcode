const fs = require("fs");

var list = [];

let newList = fs.readFile("./day-1/part-a/list.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var list = data.split("\r\n");
  /*  list = list.map(function(item) { */
  //console.log("list (from text) = " + list);
  console.log("items: " + list.length);
  var newList = list;
  console.log("new List (from text file): " + newList);
  return newList;
});

console.log("list: " + newList + " line 19 -- this should show the list");
/*
unformattedList = [
  "sixrrmlkptmc18zhvninek",
  "jcb82eightwond",
  "twofourthree778nineeight",
  "sqpxs1cgcrmctlgqvzxbcjzgr",
  "nqkjxbmbpkz9eight8",
  "one6fourfiveqndtrvgkkgthppnine",
  "zbrbdpbfcfxcqq5oneninejfgqpkfn",
  "hvlstzgvmjfivefourqjqtxdjmbxfour4four2",
];
*/
console.log(
  "newList: " + newList + " line 32 -- this should show the new list"
);

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

console.log("stringArray: " + stringArray);

let firstDigit = null;
let lastDigit = null;

const digits = function (string) {
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
};

let answer = +"0";
let runningTotal = +"0";

for (const string of stringArray) {
  //  console.log(string);
  let prevTotal = runningTotal;
  answer = Number(digits(string));
  runningTotal = prevTotal + answer;
  console.log(runningTotal);
}
