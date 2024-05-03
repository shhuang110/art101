/*
   This program asks the user for their name,
   sorts the letters of the name, and displays the sorted name.
*/

// Function to sort the letters of the user's name
function sortUserName() {
  // Ask the user for their name
  let userName = window.prompt("Please tell me your name:");
  
  // Convert the user's name to lowercase and split it into an array of letters
  let letters = userName.toLowerCase().split('');
  
  // Sort the letters of the name alphabetically
  let sortedLetters = letters.sort();
  
  // Convert the sorted letters array back to a string
  let sortedName = sortedLetters.join('');
  
  // Return the sorted name
  return sortedName;
}

// Call the function and output the sorted name
let sortedName = sortUserName();
document.writeln("I fixed your name: " + sortedName);
