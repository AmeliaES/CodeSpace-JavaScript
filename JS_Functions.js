/*Activity 1 - Vanilla JS Functions
Write 2 JavaScript functions to: 
- show the array content. 
- find the max value in the array.
Sample Array : [10, 2, 3, 4, 7]

Expected Output :

The content of the array is: [10, 2, 3, 4, 7]

The max value in the array is: 10
*/

function showArray(array) {
    return 'The content of the array is: [' + array + ']'
}

function maxArray(array) {
    return Math.max(...array)
}

let sampleArray = [10, 2, 3, 4, 7]
console.log( showArray( sampleArray ) )
console.log( maxArray( sampleArray ) )

/* Activity 2 - Vanilla JS Functions
Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). The function accepts the number as an argument.

Note:
The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!

For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 

The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1.
*/

function factoralFunc(num){ // define a function that takes a number and factorises it
    var fact = 1 // define the fact variable as 1 to begin the factorisation
    if(num >= 0){
        for(let i = 1; i <= num; i++){ // loop over i incrementing by 1 
           fact = fact * i // multiply fact by i 
        }
        return fact
    }else if(num == 0){ // the factorial of 0 is 1
        return 1
    }else{ // If the input is not a positive number then return the following:
        return 'Input is not a positive number, therefore it cannot be factorised.'
    }
}

// Test function returns expected output:
console.log( factoralFunc(6) )
console.log( factoralFunc(0) )
console.log( factoralFunc(-2) )
console.log( factoralFunc('test something that is not a number') ) // returns 'Input is not a positive number, therefore it cannot be factorised.'


/* Activity 3 - Vanilla JS Functions
Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime.
*/

function primeFunc(num){
    if(num > 0 & Number.isInteger(num) ){                            // only test for input that is > 0, as prime number are positive integers
        for (let i = 2; i < num; i++) {                             // divide input by 2 and increments of 1 up to the value of num
            if (num % i === 0) {                                    // if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 
                return 'Your number "' + num + '" is not a prime number.'
            }
        }
        return 'Your number "' + num + '" is a prime number.'
    }else{
       return 'Input not valid.'
    }
}

console.log( primeFunc(3) ) // this is a prime number
console.log( primeFunc(3.3) ) // this is not a prime number
console.log( primeFunc(4) ) // this is not a prime number
console.log( primeFunc(-1) ) // this is not a prime number
console.log( primeFunc('test') ) // this is not a prime number