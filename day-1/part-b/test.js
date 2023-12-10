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
  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      currentWord += str[i];
      console.log(str[i]);
    } else {
      if (wordToDigit[currentWord]) {
        result += wordToDigit[currentWord];
      } else {
        result += currentWord;
      }
      currentWord = "";
      result += str[i];
    }
  }
  if (wordToDigit[currentWord]) {
    result += wordToDigit[currentWord];
  } else {
    result += currentWord;
  }
  return result;
}

console.log("result= " + parseString("abone2threexyz"));
// Output: 1one23xyz
