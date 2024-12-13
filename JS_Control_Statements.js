/* Activity 1 - Control Statements
Write a JavaScript program that accepts three numbers and 
prints "All numbers are equal" if all three numbers are equal, 
"All numbers are different" if all three numbers are different
and "Neither all are equal or different" otherwise.

Test Data:

Input first number: 2
Input second number: 3
Input third number: 4

Expected Output :

All numbers are different.
*/

let num1 = 2
let num2 = 3
let num3 = 4

if (num1 == num2 && num2 == num3){ // check for matches between the numbers
    console.log("All numbers are equal")
} else if ( num1 != num2 && num2 != num3 && num1 != num3 ){ // check if all pair combinations are different
    console.log("All numbers are different")
} else {
    console.log("Neither all are equal or different") // if neither of the above are true then it must mean that exactly 2 of the numbers are equal
}

/* Activity 2 - Control Statements
Write a JavaScript program that accepts three numbers 
from the user and prints "Increasing order" if the numbers
are in the increasing order, "Decreasing order" if the 
numbers are in the decreasing order, and "Neither increasing
or decreasing order" otherwise.

Test Data:

Input first number: 1524
Input second number: 2345
Input third number: 3321

Expected Output :

Increasing order.
*/

// Allow the user to input three numbers
let firstNum = Number(window.prompt("Input the first number:"))
let secondNum = Number(window.prompt("Input the second number:"))
let thirdNum = Number(window.prompt("Input the third number:"))

// Determine if the numbers are inputted in increasing, decreasing or neither order
let statement;

if (firstNum < secondNum && secondNum < thirdNum){
    statement = "Increasing order"
} else if (firstNum > secondNum && secondNum > thirdNum){
    statement = "Decreasing order"
} else {
    statement = "Neither increasing or decreasing order"
}

console.log(statement) // output statement to console
document.getElementById("controlStatements_activity2").innerHTML = statement // output to html paragraph element with ID = "controlStatements_activity2" in index.html
