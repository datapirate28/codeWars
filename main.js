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

// fourht problem

// We need a function that can transform a number (integer) into a string.

function numberToString(num){
    return num.toString();
}

console.log(numberToString(10));