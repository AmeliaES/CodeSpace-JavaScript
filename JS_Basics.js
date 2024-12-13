// Activities for the Java Script module - Vanilla JS Basics
// -----------------------------------------
/* Activity 1 - Vanilla JS Basics
Write a JavaScript program to print the result of the following operations.

Test Data:

a. -5 + 8 * 6 

b. (55+9) % 9 

c. 20 + -3*5 / 8 

d. 5 + 15 / 3 * 2 - 8 % 3
*/

// a:
// console.log prints output to the debug console
console.log(-5 + 8 * 6)

//b: 
console.log( (55+9) % 9 )

//c:
console.log( 20 + ((-3 * 5) / 8 ))

//d:
console.log(5 + 15 / 3 * 2 - 8 % 3)

// -----------------------------------------

/* Activity 2 - Vanilla JS Basics
Write a JavaScript program to divide two numbers, using the input from the user, and print the result on the screen.

Expected Output :

Input the first number: 6
Input the second number: 2
The division of the first number and the second number is: 3
*/

let firstNum = Number(window.prompt("Input the first number:"))
let secondNum = Number(window.prompt("Input the second number:"))

// Return the number as an alert:
alert('The division of the first number and the second number is: ' + ( firstNum / secondNum) )

// Return the number to display on html page:
document.getElementById("basics_activity2").innerHTML = 'The division of the first number and the second number is: ' + ( firstNum / secondNum) 

