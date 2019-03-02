/*****************************************************************/

// https://www.codewars.com/kata/string-incrementer/javascript

// Your job is to write a function which increments a string, 
// to create a new string. If the string already ends with a number,
// the number should be incremented by 1. If the string does not 
// end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// if there are numbers in the string, run hasNumbers(), else just add 1 and return the result
const incrementString = string => /\d/.test(string) ? hasNumbers(string) : string + 1

// processes string if there are numbers present
const hasNumbers = string => (

// regex uses replace() to pass all numbers found to function as a string and replace
// them incremented by 1
  string.replace(/\d+/, numbers => {
    // stores the initial length of the string
    const length = numbers.length
    // converts numbers to a number, adds 1, converts back to a string
    numbers = (parseInt(numbers) + 1) + ''
    // uses initial length to compare to current length
    // if current length is less than initial length
    // replaces 0's until initial length is reach again
    while(numbers.length < length){
      numbers = "0" + numbers
    }
    // returns the full string, incremented to add to the initial string
    return numbers
  })
)

/*****************************************************************/

//https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = url => {
  
  url = url.replace(/https*:\/\//, '')
  url = url.replace(/w{3}./, '')
  url = url.replace(/\.(.*)/, '')
  return url

}

/*****************************************************************/

// https://www.codewars.com/kata/are-you-playing-banjo/javascript

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

const areYouPlayingBanjo = name => (
  /^R/i.test(name) ? `${name} plays banjo` : `${name} does not play banjo`
 )

/*****************************************************************/

//https://www.codewars.com/kata/rot13/

// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

const rot13 = string => (
  [...string].map(letter => {
    if(letter.match(/[a-m]/i)){
      return String.fromCharCode(letter.charCodeAt() + 13)
    }
    else if(letter.match(/[n-z]/i)){
      return String.fromCharCode(letter.charCodeAt() - 13)
    }
    else {
      return letter
    }
  }).join('')
)

/*****************************************************************/

//https://www.codewars.com/kata/break-camelcase/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

const solution = string => {
  const camelled = Array.from(string).map(letter => /[A-Z]/.test(letter) ? ` ${letter}` : letter )
  return camelled.join('')
}

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
