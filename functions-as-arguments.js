/*Functions as arguments (1)

Create a function called repeat which takes two arguments:
The first argument should be an arbitrary function, fn
The second argument should be a number, n
repeat should loop n times
Each iteration of the loop, it should call fn
Create two more functions called hello and goodbye:
hello should log the string 'Hello world'
goodbye should log the string 'Goodbye world'
Use your repeat function to call the hello function five times: repeat(hello, 5)
Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)
*/

function repeat(fn, n) {
  for(i=1; i <= n; i++) {
    fn();
  }
}
function hello(){
  console.log('Hello world')
}

function goodbye(){
  console.log('Goodbye world')
}

repeat(hello, 5);
repeat(goodbye, 5);

/*
  Functions as arguments (2)

*/

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn){
    let newArray = [];
    for(i = 0; i < arr.length; i++){
        // bug
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const pets = ['Fido', 'Fifi', 'Pluto', 'Roger'];
console.log(filter(pets, name => name[0] === 'R'));
