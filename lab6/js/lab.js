// Author: Shirley Huang
// Lab 6: Arrays and Objects
// ART 101
// APRIL 28 2024

// Define Variables
let myTransport = ["car", "feet", "bus", "train"];

// create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Camery",
  color: "blue",
  year: 2018,
}

// output:
document.writeln("Getting around: " + myTransport + "<br>");
// output object:
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
