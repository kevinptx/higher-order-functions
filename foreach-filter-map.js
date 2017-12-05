/*
A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array represents the number of movements the turtle takes forwards. The second number in the array is the number of movements the turtle takes to the left.
Here is an array of different movements made by a turtle: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
Use the filter method to remove any items where the turtle moves backwards or to the right (i.e. where either the first of second number is an item is negative).
*/

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//whatever condition is true, it will return those values. Whatever doesn't match what we are checking against is discarded.
    filteredMovements = movements.filter(m => m[0] >= 0 && m[1] >=0);

  //for every element in an array, .map is applying the function we're passing. In this case we're passing an arrow function adding the first element in the array + the second element in the array. For every element in the array, we're passing the array witin it and then the result is that it returns an array to us with the result of the function that was passed.
    totalSteps = filteredMovements.map(arr => arr[0]+arr[1]);

console.log(filteredMovements);
console.log(totalSteps);

//for each is applying the function to every element as well. We're saying for every element in the given array, apply the function console.log. Difference between .forEach() and .map() is that .map returns an array whereas forEach doesn't. It simply applies the function that you give it.
totalSteps.forEach(val => console.log(val));
