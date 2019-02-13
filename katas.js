/*****************************************************************/

// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

const countSmileys = faces => {
  // regex passes if string starts with ":" or ";", followed by "-" or "~" 0 or 1 times, ending with ")" or "D"
  const regex = /(^:|^;)(-?|~?)(D$|\)$)/
  let count = 0
  faces.forEach(face => {
    if (regex.test(face)) {
      count += 1
    }
  })
  return count
}

/*****************************************************************/

//https://www.codewars.com/kata/closest-elevator/javascript

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The called floor, i.e. the floor you want to reach
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equidistant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers in the closed-open range [0, 3).

const elevator = (left, right, call) =>
  Math.abs(right - call) <= Math.abs(left - call) ? 'right' : 'left'

/*****************************************************************/

// https://www.codewars.com/kata/create-phone-number/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = numbers =>
  `(${numbers.splice(0, 3).join('')}) ${numbers
    .splice(0, 3)
    .join('')}-${numbers.join('')}`

/*****************************************************************/
