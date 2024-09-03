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
    if(name[0] === 'R' && 'r'){
        return `${name} plays banjo.`
    }else{
        return `${name} do not play banjo.`
    }
}

// concise of dealing with the problem:

function areYouPlayingBanjoConciseWay(name){
    return name === 'R' && 'r' ? `${name} plays banjo.` : `${name} do not play banjo.`;
}