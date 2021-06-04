// https://www.youtube.com/watch?v=nEabP9CYCAQ&t=22s

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10))
}

/*------------------------------------------------------------*/
/* forEach
--------------------------------------------------------------*/
// Does not modify original array
// Returns undefined

const result1 = [];
arr.forEach(num => result1.push(num * 2));

// console.log(arr, result1);


/*------------------------------------------------------------*/
/* map
--------------------------------------------------------------*/
// Does not modify original array
// Returns A NEW ARRAY

const result2 = arr.map(num => num * 2)

// console.log(arr, result2);


/*------------------------------------------------------------*/
/* filter
--------------------------------------------------------------*/
// Does not modify original array
// Returns A NEW ARRAY of elements for which the condition was satisfied (callback returned TRUE)

const lessThanFive = arr.filter(num => num < 5)

// console.log(arr, lessThanFive);


/*------------------------------------------------------------*/
/* reduce
--------------------------------------------------------------*/
// Good for deriving a single value from multiple elements in the array.
// Returns a single value. 

const sum = arr.reduce((a, b) => a + b, 0);

// console.log(arr, sum);


/*------------------------------------------------------------*/
/* find
--------------------------------------------------------------*/
// Returns first matching value

const even = arr.find(num => num % 2 === 0) // checks if remainder is 0

// console.log(arr, even);


/*------------------------------------------------------------*/
/* concat
--------------------------------------------------------------*/
// Returns a new merged array

const newArr = arr.concat(555, [33, 34])

// console.log(newArr);


/*------------------------------------------------------------*/
/* some
--------------------------------------------------------------*/
// Returns TRUE/FALSE whether any of the array elements satisfies a condition.

const one = arr.some(num => num === 1)

// console.log(arr, one);


/*------------------------------------------------------------*/
/* slice
--------------------------------------------------------------*/
// Returns an array of selected elements
// Does not modify original array

const aPeice = arr.slice(1, 3)
const aPeice2 = arr.slice(3)

// console.log(arr, aPeice, aPeice2);


/*------------------------------------------------------------*/
/* splice
--------------------------------------------------------------*/
// Adds, removes, and replaces array elements.
// MODIFIES ORIGINAL ARRAY

const myArr = ["banana", "orange", "apple", "grapes", "peach"]

myArr.splice(2, 3)

// console.log(myArr);

/*------------------------------------------------------------*/
/* Chaining
--------------------------------------------------------------*/

const val = arr
    .map(num => num / 2)
    .filter(num => num < 5)
    .reduce((a, b) => a + b, 0)

// console.log(val);