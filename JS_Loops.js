/*Activity 1 - Vanilla JS Loops
Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Expected Output:

"0 is even"
"1 is odd"
"2 is even"
*/

const n = 15
let endStatement = ''
let statement = ''

// looping from i = 1 to 15
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0){
        statement = " is even <br>"
    } else if (i % 2 == 1){
        statement = " is odd <br>"
    }
    console.log(i + statement) // print message to console
    // alert( i + statement ) // display as an alert box (click ok to dismiss each alert for each iteration)
    endStatement =  endStatement + i + statement
}

document.getElementById("loops_activity1").innerHTML = endStatement // output to html paragraph element with ID = "loops_activity1" in index.html

/*Activity 2 - Vanilla JS Loops
Write a JavaScript program to create the multiplication table (from 1 to 10) of a number.
*/

let input = Number(window.prompt("Input number:"))
let endStatementMult = ''

for(let i = 1; i <= 10; i++) {
    endNum = input * i
    output = input + ' x ' + i + ' = ' + endNum
    console.log(output)
    endStatementMult =  endStatementMult + output + '<br>'
}

document.getElementById("loops_activity2").innerHTML = endStatementMult // output to html paragraph element with ID = "loops_activity2" in index.html
