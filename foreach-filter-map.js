/*
A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array represents the number of movements the turtle takes forwards. The second number in the array is the number of movements the turtle takes to the left.
Here is an array of different movements made by a turtle: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
Use the filter method to remove any items where the turtle moves backwards or to the right (i.e. where either the first of second number is an item is negative).
*/

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function moveTurtle(movements){
    let countedSteps = movements.filter(function(movement){
        for(i = 0; i < movement.length; i++){
            console.log(`current i ${movement[i]}`);
            for (j = 0; j < movement[i].length; j++){
                console.log(`current j ${movement[i][j]}`);
        }
        }
    });
    
  // movements.map(s => console.log(s));
    return countedSteps;
}

console.log(moveTurtle(movements));
