/*
Functions as return values

Our task is to create multiple versions of a "hazard alert", which tells you the location of the hazard and how many times that hazard has issued an alert. We're using functions as return values to create closures. Each hazard warning is going to exist in its own closure so we can separately track how many times each warning has been issued.

Create a hazardWarningCreator function which takes one argument typeOfWarning
Inside the function, create a warningCounter variable that initializes at 0
Would a number variable expected to change be let or const?
Return an anonymous function, which takes one argument location
Inside the inner function:
Increment warningCounter
Answer out loud: Why does the inner function have access to warningCounter? Because of sc--- ch---
Log out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
Log out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
Remember: string interpolation above requires a special character, not ' or "
Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
const rocksWarning = hazardWarningCreator('Rocks on the Road');
(you create two more of your choice)
Finally, invoke each of your newly created hazard warning closures several times at different locations:
rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too
Bonus credit! Can you figure out how to log out "time" for a value of 1 and "times" for a value of 0 or > 2?
*/

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    //because of scope chains we have access to warningCounter.
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    //this is the meaning of the condensed code below:
    //if(warningCount === 1){ console.log(''); } else { console.log('s'); }
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time ${warningCounter===1?'':'s'} today!`);
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const snowWarning = hazardWarningCreator('Snow and ice on Road');
const fogWarning = hazardWarningCreator('Foggy drivig conditions');

rocksWarning("Los Angeles");
snowWarning("Denver");
snowWarning("Chicago");
snowWarning("New York");
fogWarning("Louisiana");
