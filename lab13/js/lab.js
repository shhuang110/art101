/* 
 * FizzBuzz Program
 * This program loops through numbers 1 to 200 and prints:
 * - "Fizz!" if the number is a multiple of 3
 * - "Buzz!" if the number is a multiple of 5
 * - "Boom!" if the number is a multiple of 7

 */

$(document).ready(function() {
  function fizzBuzz() {
      let oneLongString = '';

      for (let num = 1; num <= 200; num++) {
          let output = num + ' ';

          if (num % 3 === 0) output += 'Fizz!';
          if (num % 5 === 0) output += 'Buzz!';
          if (num % 7 === 0) output += 'Boom!';

          oneLongString += output + '<br>';
      }

      $('#output').html(oneLongString);
  }

  // Run the FizzBuzz function
  fizzBuzz();
});
