/**
 * Study sheet by github.com/omerjava for Array iteration methods
 * map(), filter(), every(), some(), find(), findIndex(), forEach(), reduce()
 */

// let's create an array first with numbers from 1 to 20
const numbers = [];

for (let i = 1; i < 21; i++) {
  numbers.push(i);
}

console.log("Numbers Array: ", numbers);

/**
 * map() method use a callback function and apply this to each array elements and return a new array
 * basically, callback function in Javascript is a function which is used as parameter in another function
 * so, map() is indeed a function which use a callback function to make operations to each array element
 * and callback function which is used inside map() have some syntax rules.
 *
 * This callback function can have 3 parameters: (value, index, array) or you can write as (v, i, arr)
 * 'value' parameter is required parameter, you can't ignore it
 * even you want to use only 'index' and 'array' parameters, you should include 'value' as parameter
 * example -> map((v,i,arr)=>arr[i]+5) -> you didn't use 'v' but you should include it
 * 'when you don't need 'index' and 'array' as parameter, you can remove them -> map( v => v+5).
 *
 * First parameter always refers to value of the array element,
 * even you name it differently, first parameter will be considered as 'value of element' by computer
 * when you write map((index,arr)=>arr[index]*10) ->
 * you will get unexpected result -> 'index' is regarded as 'value of element'
 * because first parameter is understood by computer always as 'value of element' whatever you name it
 * similarly, whatever you name it, computer will judge that second parameter is 'index of array'
 * and whatever you name it, computer will judge that third parameter is 'array which method is applied'
 * So when we write 'array.map((x, y, z) => x + y[z])' ->
 * 'x' refers to 'value of array element' , 'y' refers to 'index of array' , 'z' refers to 'array which method is applied'
 *
 * Another thing is, actually 'value === array[index]', because 'array[index]' also reaches to 'value of array element'
 * so why do we need 3 parameters? Because sometimes we want to reach different array elements at the same time.
 * for example, I want to check consecutive array elements and see whether they are same -> let myArray=[2,3,4,4,5];
 * you can write 'const newArray= myArray.map((v,i,arr) => {if(v===arr[i+1]) return v*10; else return v*2;})'
 * by writing arr[i+1] you can reach to following array element, you can't do it with 'v+1'
 *
 * const newArray = currentArray.map() -> it creates a new array and doesn't change original array
 */

const mappedArray1 = numbers.map((value, index, array) => array[index] * 2);
console.log("mappedArray1: ", mappedArray1);
// even you don't use 'value' parameter, you should keep it

const mappedArrayError = numbers.map((index, array) => array[index] * 2);
console.log("mappedArrayError: ", mappedArrayError);
// mappedArrayError elements are all NaN,
// because first parameter is always regarded as 'value of element' not 'index of array'

const mappedArray2 = numbers.map((value, index, array) => value * 2);
console.log("mappedArray2: ", mappedArray2);

const mappedArrayWith1Parameter = numbers.map((value) => value * 2);
console.log("mappedArrayWith1Parameter: ", mappedArrayWith1Parameter);
// if you use only 'value' you can remove 'index' and 'array' parameters,

const mappedArrayWithoutUsingValue = numbers.map((value) => 5 * 2);
console.log("mappedArrayWithoutUsingValue: ", mappedArrayWithoutUsingValue);
// you will get a new array consists of array.length times same element -> (5*2)

const mappedArrayWithoutAnyParameter = numbers.map(() => 5 * 2);
console.log("mappedArrayWithoutAnyParameter: ", mappedArrayWithoutAnyParameter);
// I used map() without any parameter for experiment,
// I was expecting an error but it works and give same result as above example
// it returns a new array consists of array.length times same element -> (5*2)
// practically not useful but interesting to know

const mappedArrayWithTernaryOperator = numbers.map((v) =>
  v % 2 === 0 ? v + 5 : v * 5
);
const mappedArrayWithConditionalStatement = numbers.map((v) => {
  if (v % 2 === 0) return v + 5;
  else return v * 5;
});
console.log("mappedArrayWithTernaryOperator: ", mappedArrayWithTernaryOperator);
console.log(
  "mappedArrayWithConditionalStatement: ",
  mappedArrayWithConditionalStatement
);
// for the use of ternary operator (_?_:_): https://www.javascripttutorial.net/javascript-ternary-operator/
// we checked elements of 'numbers' array one by one,
// if the element is divisible by 2, we took this element to new array by summing it with 5
// if not we took this element to new array by multiplying it with 5 -> check mappedArrayWithTernaryOperator in console
// if you use statements like 'if(){} else{}', 'for(){}', you need to use {} for function body
// if you use only an expression, no need 'return' statement and you can use () around expression or you can write expression without parentheses
// expression vs statement -> https://maksimivanov.com/posts/statements-expressions-js/

const myArray = [11, 4, 5, 9, 12, 8, 9];
const newArray = myArray.map((v, i, arr) => {
  if (v > arr[i + 1]) return "I am bigger than next number";
  else return "I am NOT bigger than next number";
});
console.log("newArray: ", newArray);
// You can compare current element with next element -> 'v>arr[i+1]' or 'v===arr[i+1]' etc..


/**
 * filter() method has similar syntax to map() and use (value,index,array) parameters like map()
 * currentArray.filter() method create a new array by taking elements which met given conditions
 * filter() method doesn't change the existing array
 */
const filteredArray1a = numbers.filter(
  (value, index, array) => array[index] > 10
);
const filteredArray1b = numbers.filter((value) => value > 10);
console.log("filteredArray1a: ", filteredArray1a);
console.log("filteredArray1a: ", filteredArray1a);
// take elements of 'numbers' array which are bigger than 10

const filteredArray2 = numbers.filter(
  (v, i, arr) => v % 2 === 0 && arr[i + 1] % 3 === 0
);
console.log("filteredArray2:", filteredArray2);
// take elements to new array only if current element is divisible by 2 and next element in the array is divisible by 3


/**
 * every() method has similar syntax to map() and use (value,index,array) parameters like map()
 * array.every() method returns true if all elements in the array met the given conditions
 * it returns a boolean value: true or false
 * it doesn't change the existing array
 */
const everyMethod1 = mappedArray1.every((value) => value % 3 === 0);
console.log("everyMethod1:", everyMethod1);

const everyMethod2 = mappedArray1.every((value) => value % 2 === 0);
console.log("everyMethod2:", everyMethod2);

const names = ["kevin", "jack", "kevin", "lisa", "kate"];

const everyMethod3 = names.every((name) => name.length <= 5);
console.log("everyMethod3:", everyMethod3);

const everyMethod4 = names.every((name) => name === names[0]);
console.log("everyMethod4:", everyMethod4);

const everyMethod5 = names.every((name) => typeof name === "string");
console.log("everyMethod5:", everyMethod5);


/**
 * some() method has similar syntax to map() and use (value,index,array) parameters like map()
 * array.some() method returns true if at least 1 element in the array met the given conditions
 * it returns a boolean value: true or false
 * it doesn't change the existing array
 */
const someMethod1 = mappedArray1.some(
  (value, index, array) => array[index] % 17 === 0
);
console.log("someMethod1:", someMethod1);

const someMethod2 = names.some((name) => name === "kate");
console.log("someMethod2:", someMethod2);


/**
 * find() method has similar syntax to map() and use (value,index,array) parameters like map()
 * array.find() method returns the first element in the array which met the given conditions
 * it doesn't change the existing array
 */
const findMethod = mappedArray1.find((number) => number % 9 === 0);
console.log("findMethod:", findMethod);
// it will return 18, because it is the first element in the array which can be divisible by 9


/**
 * findIndex() method has similar syntax to map() and use (value,index,array) parameters like map()
 * array.findIndex() method returns the index of first array element which met the given conditions
 * it returns -1, if there is no element in the array which met the given conditions
 * it doesn't change the existing array
 */
const findIndexMethod1 = names.findIndex((name) => name === "peter");
console.log("findIndexMethod1:", findIndexMethod1);

const findIndexMethod2 = names.findIndex((name) => name.length === 4);
console.log("findIndexMethod2:", findIndexMethod2);

/**
 * forEach() method has similar syntax to map() and use (value,index,array) parameters like map()
 * currentArray.forEach() method applies callback function to all array elements like map()
 * important difference is that forEach() method returns 'undefined' value instead of new array
 * so, it is not chainable like map(), filter(), you can use it at the end of dot functions chain
 * in most cases map() method is better to use
 */
const digits = [4, 5, 7, 9, 12, 3, 6];

const forEachDigits = digits.forEach((digit) =>
  console.log("forEach() is applied: ", digit)
);
console.log("Return of forEachDigits:", forEachDigits); // it returns 'undefined' value

digits
  .map((v) => v + 100)
  .filter((v) => v % 2 === 0)
  .forEach((v) => console.log("forEach() after map() and filter():", v));  // check the console for output


/**
 * reduce() method has different syntax than other methods
 * callback function use (accumulated,value,index,array) parameters
 * 'accumulated','value' parameters are required, you can't omit them
 * 'index','array' are optional, you can remove them if you don't use
 * 'accumulated' parameter can be named also as 'previousValue', 'total', 'result' 
 * it actually refers to initial value and after all operations it will be the result value
 * if there is no assigned 'initialValue', ->
 * `accumulated` will take the value of first element, 'value' will take the value of second element in the first loop
 *
 * array.reduce() method applies callback function to all array elements and returns a single value
 * for example, you sum all elements of an array and get accumulated result (sum of numbers).
 *
 * Syntax with initialValue: `const result = array.reduce((acc,v,i,arr) => (acc+=v), initialValue);`
 * if you use initialValue with 5, `acc` will be 5 and 'v' will be the value of first element in the first loop
 * 'initialValue' is optional
 */

const stringArray = ["how", "are", "you?"];
const numberArray = [3, 6, 9, 10, 23, 21];

const reducedArray1 = numberArray.reduce(
  (acc, value, index, array) => (acc += value)
);
console.log("reducedArray2:", reducedArray2);

const reducedArray2 = numberArray.reduce(
  (acc, value, index, array) => (acc += value),
  -5
);
console.log("reducedArray1:", reducedArray1);

const reducedArray3 = stringArray.reduce(
  (previous, current) => (previous += " " + current)
);
console.log("reducedArray3:", reducedArray3);

const reducedArray4 = stringArray.reduce(
  (previous, current) => (previous += " " + current),
  "John"
);
console.log("reducedArray4:", reducedArray4);



// Example-1 -> use methods together -> step by step

const sentence = "  the    weaTher is   very gooD   tODay.  ";

const trimmedSentence = sentence.trim();
console.log(
  "No more any space in the begin and end after trim() :",
  trimmedSentence
);

const charactersArray = trimmedSentence.split(""); // we used split() without space "" to get characters array
console.log("Characters array after split() :", charactersArray);

const filteredCharactersArray = charactersArray.filter(
  (v, i, arr) => v !== " " || (v === " " && arr[i + 1] !== " ")
);
// only 1 space characters will be allowed between characters, so we removed extra spaces by using filter()
console.log("filteredCharactersArray :", filteredCharactersArray);

const newSentence = filteredCharactersArray.join(""); // we used join() without space ""
console.log("newSentence :", newSentence);

const wordsArray = newSentence.split(" "); // we used split() with space " " to get words array
console.log("wordsArray :", wordsArray);

const mappedWordsArray = wordsArray.map(
  (v) => v[0].toUpperCase() + v.slice(1).toLowerCase()
);
console.log("mappedWordsArray :", mappedWordsArray);

const formattedSentence = mappedWordsArray.join(" "); // we used join() with space " " to get a sentence again
console.log("formattedSentence :", formattedSentence);

// Example-1 -> use methods together -> dot function chain

const formattedSentenceSingleLine = sentence
  .trim()
  .split("")
  .filter((v, i, arr) => v !== " " || (v === " " && arr[i + 1] !== " "))
  .join("")
  .split(" ")
  .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
  .join(" ");

console.log("formattedSentenceSingleLine :", formattedSentenceSingleLine);
