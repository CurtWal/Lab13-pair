"use strict";

// ATTENTION: Please create functions for each exercise and test them with your function calls.


// 1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
function sumOfTwo(){
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let sum = 0;
for(let i =0; i<arr_1;i++){
    sum+= arr_1 + arr_2;
}
}
sumOfTwo()
console.log(sum);

// 2) Using a for loop print all even numbers up to and including n. Don’t include 0.
function value(){
let n1 = 22;
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
for(let i = 2;i<=n1;i+=2){
console.log(`Itreation is #${i}`);
}
}
value()

// 3) Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
for(let i = 0; i<arr.length;i++){
arr.reverse();
}



// 4) Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
var result = [];

for (var i = 0; i < arr_3.length; i++) {
    result.push(arr_3[i] + arr_4[i] );
}
result;



// 5) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
function order(){
let a= 0;
let b=-1;
let c= 4;
if (a>b && a>c)
{
        if (b>c)
        {
            alert(a + ", " + b + ", " +c)
            console.log(a + ", " + b + ", " +c);
        }
        else
        {
            alert(a + ", " + c + ", " +b)
            console.log(a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
            alert(b + ", " + a + ", " +c)
             console.log(b + ", " + a + ", " +c);
        }
        else
        {
            alert(b + ", " + c + ", " +a)
             console.log(b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            alert(c + ", " + a + ", " +b)
            console.log(c + ", " + a + ", " +b);
        }
        else
        {
            alert(c + ", " + b + ", " +a)
            console.log(c + ", " + b + ", " +a);
        }
}
}
order()

// 6) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
function highest(){
    a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    alert(a)
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    alert(b)
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    alert(c)
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    alert(d)
    console.log(d);
}
else
{
    alert(f)
    console.log(f);
}
}
highest()