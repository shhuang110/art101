/*
 * Sorting Hat Program
 * This program assigns a Hogwarts house based on the length of a given name.
 */

// Function sortingHat takes a string as an argument
function sortingHat(str) {
  // Count the letters in the string
  let length = str.length;
  // Get the remainder when length is divided by 4
  let mod = length % 4;
  
  // Determine the house based on the remainder
  if (mod === 0) {
      return "Gryffindor";
  } else if (mod === 1) {
      return "Ravenclaw";
  } else if (mod === 2) {
      return "Slytherin";
  } else {
      return "Hufflepuff";
  }
}

// Add an event listener to the button with id #button
document.getElementById('button').addEventListener('click', function() {
  // Get the value of the input with id #input
  let name = document.getElementById('input').value;
  // Run sortingHat with the name and store the result in house
  let house = sortingHat(name);
  // Create a new paragraph element
  let newParagraph = document.createElement('p');
  // Set the text of the paragraph to the sorting result
  newParagraph.textContent = "The Sorting Hat has sorted you into " + house;
  // Append the new paragraph to the div with id #output
  document.getElementById('output').appendChild(newParagraph);
});
