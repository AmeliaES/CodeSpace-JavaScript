/*Activity 1 - Vanilla JS Arrays
Write a JavaScript program to sum values of an array.

Test Data:

Sample Array:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Expected Output:

The sum is 55.
*/


const sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let aLen = sumArray.length; // get length of array
let sum = 0 // set a variable called sum, and set to 0 initally

for (let i = 0; i < aLen; i++) { // loop through 0 to length of the array
   sum += sumArray[i] // with each iteration add the number of the indexed value in the array to the total sum
   console.log(sum) // print this sum with each iteration
}

document.getElementById("arrays_activity1").innerHTML = sum // print the final outcome of the for loop, which is the total sum of all values in the array


/*Activity 2 - Vanilla JS Arrays
Write a JavaScript program to calculate the average value of an array elements.

Test Data:

Sample Array:

[20, 30, 25, 35, -16, 60, -100]

Expected Output:

Average value of the array elements is : 7.7.
*/

const avArray = [20, 30, 25, 35, -16, 60, -100];
let avLen = avArray.length;
let avSum = 0 // set a variable called sum, and set to 0 initally

for (let i = 0; i < avLen; i++) { // loop through 0 to length of the array
   avSum += avArray[i] // with each iteration add the number of the indexed value in the array to the total sum
}

console.log(avSum) // print the sum of the array before calculating the average
document.getElementById("arrays_activity1").innerHTML = avSum/avLen // print the final outcome of the for loop, which is the total sum of all values in the array

/* Activity 3 - Vanilla JS Arrays
Write a JavaScript program to find the maximum and minimum value of an array.

Test Data:

Sample Array:

[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:

Original Array: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Maximum value for the above array = 77

Minimum value for the above array = 14
*/

testArray = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

console.log("Original Array: [" + testArray + "]")
console.log("Maximum value for the above array = " + Math.max(...testArray)) // use Math methods 
console.log("Minimum value for the above array = " + Math.min(...testArray))
