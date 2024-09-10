// code wars dialy problems

// first problem: get to work the code below
// answer

// in order for this code to work, we need to return the value of multiplication 

function multiply(a, b){
    return a*b
}

// =========
// =========

// second problem: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// answer

function evenOrOdd(num){
    if(num % 2 == 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}

// another way of dealing with this problem using ternary operator

// function evenOrOdd(num){
//     return num % 2 == 0 ? 'Even' : 'Odd';
// }

// the shortest way to deal with this problem

// const evenOrOdd = (num) => num % 2 == 0 ? 'Even' : 'Odd';


// ==========
// ==========

// third problem: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrvName(name){
    const nameArr = name.split(' ');
    const [firstName, lastName] = nameArr;
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`
}


// ==========
// ==========

// fourth problem

// We need a function that can transform a number (integer) into a string.

function numberToString(num){
    return num.toString();
}

console.log(numberToString(10));

// another way of tackling this problem is using global string() function; The String() function is a global function in JavaScript that converts its argument to a string. 
function numberToString(num){
    return String(num);
}

// another way: When you put a non-string value (like a number) inside ${} in a template literal, JavaScript automatically converts it to a string.

// const numberToString = num => `${num}`;

// ==========
// ==========

// fifth problem

// Complete the solution so that it reverses the string passed into it.
// output should look like this: 
//'world'  =>  'dlrow'
//'word'   =>  'drow'

function reverseString(str){
    let strArray = str.split('');
    let strReverse = strArray.reverse();
    let strResult = strReverse.join('');

    return strResult;
}

let reverseResult = reverseString('Pirate28');
console.log(reverseResult);


//consise way of coping with this problem: chainig the methods

function reverseString(str){
    return str.split('').reverse().join('');
}

// ==========
// ==========

// sixth problem

// you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
        return -Math.abs(num);
}

// just want to remind you that -0 is treated as 0 in JS.

// another way of coping with this problem:

function makeNegative(num) {
    return num <= 0 ? num : num*-1;
}


// ==========
// ==========

// seventh problem

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
    let removeFirstAndLastCharacter = str.slice(1, -1)
    return removeFirstAndLastCharacter;
}

// concise way:

function removeChar(str){
    return str.slice(1, -1);
}

// try to understand the difference between .slice and .substring methods for string
// https://www.youtube.com/watch?v=PxD4cwADFys


// another way of dealing with this problem:

function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
};

// ==========
// ==========

// eightth problem
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// detailed way of dealing with the problem:

function areYouPlayingBanjo(name){
    if(name[0] == 'R' || name[0] == 'r'){
        return `${name} plays banjo.`
    }else{
        return `${name} does not play banjo.`
    }
}

// concise of dealing with the problem:

function areYouPlayingBanjoConciseWay(name){
    return name[0] == 'R' || name[0] == 'r' ? `${name} plays banjo.` : `${name} does not play banjo.`;
}

// another way of dealing with this problem:

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}

// another way: 

function areYouPlayingBanjo(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
      return name + " plays banjo";
    } else return name + " does not play banjo";
}


// ==========
// ==========

// ninth problem
// write a function that camelize a given a string as below.
// camelize("background-color") == 'backgroundColor';

// detailed way of dealing with this problem:
function camelizeString(word){
    return word 
        .split('-') // we change the string into an array
        .map(
            function(word, index){ // now since it is an array, we will try access the array elements and do the capitalizaion.
                if(index == 0){
                    return word;
                }else{
                    return word[0].toUpperCase() + word.slice(1);
                }
            } 
        )
        .join('');
}

// concise way of dealing with this problem:

const camelizeWord = word => word.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');


// ==========
// ==========

// tenth problem
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// attached is the example: 

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n){
    let result = [];
    for(let i = 1; i<=n; i++){
        result.push(x*i);
    }

    return result;
}

// another way of dealing with this problem:

function countByConcise(x, n) {
    var result = [];
    for (var i=x; i<=(x*n); i+=x){
    result.push(i);
    }
    return result;
}


// ==========
// ==========

// eleventh problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(userInput){
    return Number(userInput[0], 10)
}
// the 10 in the return statement makes sure the output is a decimal value

console.log(getAge('9 years old.'))

// another way of dealing with this problem:

function getAge(userInput){
    return parseInt(userInput[0], 10);
}


// ==========
// ==========

// eleventh problem
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function findSummation(userInput){
    let result = 0;
    for(let i =1; i<=userInput; i++){
        result += i;
    }

    return result;
}

