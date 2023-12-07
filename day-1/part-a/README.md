https://adventofcode.com/2023/day/1

--- Day 1: Trebuchet?! ---
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

Final answer is 55607

## Key techniques and challenges

readFile function to convert the text file into an array of strings - be sure the txt file does not end with a blank line

digit function to iterate through the string both directions. used double loops, including a reverse loop - had to use j >= 0 for the reverse loop to get it to read the first character (duh!!). The reverse loop needs to return the same digit as the forward loop if there is only one digit.

handle strings with no digits - at one point, the digits function was adding the most recent total to the running total, doubling the previous input. I solved this by initializing firstDigit and lastDigit to 0, then testing after the loops to clear the total if they were both 0. (typing this, I realize that I could probably initialize total at the beginning of the function instead, and eliminate the test.)

callback function wrapping the logic - struggled with passing the digits out of the digit function.
