//pop() --> delete last element from array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
//the result: ["Banana", "Orange", "Apple"]

//push() --> add element to the end of array
const numbers = [1, 2];
numbers.push(3);
//the result: [1, 2, 3]

//Shifting --> popping, but instead of last, delete first element then shift all other elements to a lower index
const fruitso = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()
//the result: ["Orange", "Apple", "Mango"]

//Unshifting --> add element to the beginning of array
const fruitsi = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")
//the result: ["Lemon", "Banana", "Orange", "Apple", "Mango"]

//changing element
const fruitsz = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
//the result: ["Kiwi", "Orange", "Apple", "Mango"]

//array length --> to fing the length of an array or easy way to append new element to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit[fruits.length] = "Kiwi"
//the result: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

//not recommend using delete, cause it'll leave undefined hole in array

//splice() --> add new element to an array without leaving undefined hole
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //first value = where new element should be added || second value = how many elements should be removed
//the result: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

//slice() --> slice out a piece of an array into a new array | doesn't remove any elements from the source array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruits.slice(1);
//the result: ["Orange", "Apple", "Mango"]
//can 2 arguments like slice(1,3) > selects elemest fromt eh start argument and u to (but not including) the end argument
//the result: ["Orange", "Apple"]


//concat() --> creates new array by merging existing array , doesn't change existing array, always returns new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys)
//the result: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
//can take any number of array arguments example:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren0 = arr1.concat(arr2, arr3);
//the result: ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]
//can also take strings as arguments
const arr7 = ["Cecilie", "Lone"];
const myChildren1 = arr1.concat("Linus");
//the result: ["Cecilie", "Lone", "Linus"]

//flat() --> process of reducing the dimensionality of an array || creates a new array with sub-array elements concatenated to a specified depth
const arr10 = [1, 2, [3, 4]];
arr1.flat();
//the result: [1, 2, 3, 4]
