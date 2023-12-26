//sort() --> sorts array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//the result: ["Apple", "Banana", "Mango", "Orange"]

//reverse() --> reverse the order of the elements in an array
const fruitsz = ["Banana", "Orange", "Apple", "Mango"];
fruitsz.reverse();
//the result: ["Mango", "Apple", "Orange", "Banana"]

//sort() not work with numeric it'll produce wrong result! so need to compare function first
const points = [40, 100, 1, 5, 25, 10];
points.sort();
//the result: [1, 10, 100, 25, 40, 5]
//the correct way:
points.sort(function(a, b){return a-b});
//the result: [1, 5, 10, 25, 40, 100]
//or descending:
points.sort(function(a, b){return b-a});
//the result: [100, 40, 25, 10, 5, 1]

//compare function --> should return a negative, zero, positive value, depending on the arguments
//function (a,b){return a -b}
//if a-b is negative, a will be sorted to a lower index than b
//if a-b is positive, b will be sorted to a lower index than a
//if a-b is zero, a and b will stay unchanged
//example:
function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = points;
  }
//the result: [40, 100, 1, 5, 25, 10] --> random order


//Fisher Yates Method --> The most popular correct method
function myFunction() {
    const points = [40, 100, 1, 5, 25, 10];
    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = points[i];
      points[i] = points[j];
      points[j] = k;
    }
    document.getElementById("demo").innerHTML = points;
  }

//Math.max.apply --> find the highest numbers in an array
const pointsl = [40, 100, 1, 5, 25, 10];
Math.max.apply(null, points);
//the result: 100

//Math.min.apply --> find the lowest numbers in an array
const pointsi = [40, 100, 1, 5, 25, 10];
Math.min.apply(null, points);
//the result: 1

//to sort object in array use the compare function
cars.sort(function(a, b){return a.year - b.year});
