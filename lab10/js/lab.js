/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Shirley Huang
   Date: 2024
*/

// Function to generate fake dialogue
function generateRandomText() {
  const text = "what up party people";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get a random starting index to slice the text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

  // Generate the random text
  return text.slice(randStart, randStart + randLen);
}

// Ensure the DOM is fully loaded before attaching event listeners
$(document).ready(function() {
  // Click listener for button
  $("#make-convo").click(function() {
    // Get new fake dialogue
    const newText = generateRandomText();

    // Append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});
