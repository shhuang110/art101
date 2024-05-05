// Author: Shirley Huang
// Created: 4 May
// ART 101 Lab 8

//declare numbers
const numbers = [2, 5, 1, 7, 8, 10, 200];

//function to add
function addNumber (x) {
  return (x+x);
}
// add numbers together
numbers.map(addNumber)
numbers.map(function(x){
  let results = (x-2);
  return results;
})

//show results
let mapResults = numbers.map(addNumber);
console.log("results:", mapResults)
