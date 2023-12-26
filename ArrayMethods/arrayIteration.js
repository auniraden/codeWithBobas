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
