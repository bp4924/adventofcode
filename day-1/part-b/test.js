function replaceWords(str, wordToDigit) {
  let result = str.split("");
  let newResult = "";
  //interate through string
  for (i = 0; i < str.length; i++) {
    //create 5 letter strings for each character
    // next i if character is a number
    if (!isNaN(result[i])) {
      console.log("number:" + result[i]);
      i++;
      //break;
    }
    for (j = i; j < i + 5; j++) {
      if (j >= str.length) {
        console.log("end");
        break;
      }
      newResult = newResult + result[j];
      if (newResult.length >= 3) {
        //        if (newResult.includes(wordToDigit.word)) {
        console.log(newResult.length);

        //    }
        //  console.log("new result: " + newResult);
      }
    }
    // replace words
    /*    for (const [word, digit] of Object.entries(wordToDigit)) {
      while (result.includes(word)) {
        result = newResult.replace(word, digit);
        console.log(result);
      }
    }*/
    newResult = "";
  }
  /* let newResult = "";
  for (const [word, digit] of Object.entries(wordToDigit)) {
    while (result.includes(word)) {
      result = result.replace(word, digit);
      console.log(str, result);
    }
  }
  */
  return result;
}

const str = "three8eightthree";
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

result = replaceWords(str, wordToDigit);
console.log("sum: " + result);
// Output: '823'
