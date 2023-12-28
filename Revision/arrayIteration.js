//forEach() --> calls a function (callback function) once for each array element
//It's used to loop through each element of an array and perform a specified action for each item
Array.forEach(function(currentValue, index, array){
    //do something with currentValue
})
//array: the array that want to iterate through
//currentValue: the current eement being processed in the array
//index(optional): the index of the current element being processed
//array(in function + optional): the array 'forEach()' was called.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    console.log(number);
});
//the output: will display all the numbers\
//It's commonly used when you want to do something with every element in an array without creating a new array or modifying the original one.

//HOW TO USE THIS?
/**
 * Example question:
 * You have an array of temperatures measured in Celsius.
 * Your task is to convert each temperature to Fahrenheit and display the converted temperatures.
 */
//My solution: this is more efficient than for loop .

function convertToFarenheit(celsiusTemperatures){
    let farenheitTempratures = [];
    celsiusTemperatures.forEach(function(celsiusTemperature){
        let farenheitTemperature = celsiusTemperature * 9/5 + 32;
        farenheitTempratures.push(farenheitTemperature);
    });
    console.log(farenheitTempratures);
}

convertToFarenheit([0, 20, 37, 100]);


/**
 * map() --> creates a new array by performing a function on each array element.
 * --> Doesn't execute the function for array elements without values
 * --> doesn't change the original array
 * --> use specifically to transform elements of an array & creating new array based on those transformations
 *
 */

const newArray = array.map(function(currentValue, index, array){
    //Return new element based on currentValue
    return newValue;
});
/*
array: the array that want to iterate through
currentValue: the current element being processed in the array
index(optional): the index of the current element being processed
array(in function + optional): the array 'map()' was called.

Example:

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number){
    return number * 2;
});

console.log(doubledNumbers);
//the output: [2, 4, 6, 8, 10]
*/

//HOW TO USE?

/**
 * Example:
 * You have an array of strings containing numbers as strings.
 * Your task is to convert these strings into actual number values and create a new array with these numbers.
 */

//my Solution:
function convertToNumbers(strings) {
    return strings.map(function(string) {
        return Number(string);
    });
}

const stringNumbers = ['1', '2', '3'];
const convertedNumbers = convertToNumbers(stringNumbers);
console.log(convertedNumbers);

/**
 * flatMap() --> first maps all elements of an array and then creates a new array by flattening the array
 * it uses when there's an array containing sub-arrays as elements and want to map each element to a new value while ensuring that the result is a single, flattened array
 */
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const mapped = nestedArr.map(x => [x * 2, x * 3]);
console.log(mapped); //output: [[2, 3], [4, 6], [6, 9], [8, 12]]

const flatMapped = nestedArr.flatMap(x => [x * 2, x * 3]);
console.log(flatMapped); //output: [2, 3, 4, 6, 6, 9, 8, 12]

/**
 * filter() --> creates new array with array elements that pass a test
 * */

//Syntax
const newArray2 = array.filter(function(currentValue, index, array){
    //Return true to include the element in the new array, false to exclude it
});
/**
 * array: the array you want to filter
 * currentValue: The current element being processed in the array
 * index (optional): the index of the current element being processed
 * array(in function + optional): the array 'filter()' called.
 */
//EXAMPLE
const numbeios = [1, 2, 3, 4, 5];
const evenNumbers = numbeios.filter(function(numbeio)
{
    return numbeio % 2 === 0;
})
console.log(evenNumbers); //output: [2, 4]

/**
 * reduce() --> runs a function on each array element to produce (reduce it to) a single value
 * works from left-to-right in array + doesn't reduce the original array
 * Iterates through the array and accumulates a single result by applying a callback function to each element of the array
 */
//Syntax
const result = array.reduce(function(accumulator, currentValue, index, array){
    //Return the updated accumulator value after performing some operation
}, initialValue);
/**
 * array: the array you want to reduce
 * accumulator: a variable accumulates the result
 * currentValue: the current element being processed in the array
 * index (optional): the index of the current element being processed
 * array (in function + optional): the array 'reduce()' was called upon
 * initialValue (optional): the initial value of the accumulator (if not provided, the first element of the array will be used as the initial accumulator value);
 */
//EXAMPLE
const numbz = [1, 2, 3, 4, 5];
const sum = numbz.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15
//calculate average
const numbp = [10, 20, 30, 40, 50];

const average = numberp.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue; // Summing up all the elements
    if (index === array.length - 1) {
        return accumulator / array.length; // Calculating average on the last iteration
    } else {
        return accumulator; // Passing the updated accumulator value for next iteration
    }
}, 0);

console.log(average); // Output: 30

/**
 * indexOf() --> used to find index of the first occurence of a specified element within an array.
 * if element not found returns -1
 */
//Syntax
const index = array.indexOf(searchElement, fromIndex);
