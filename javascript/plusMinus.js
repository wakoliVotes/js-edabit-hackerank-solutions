/*

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal.
The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints


*/

function plusMinus(arr) {
    // TRY - Checking positive, negative and zero elements in the array
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]>0) {
    //         console.log(arr[i], ' > 0');
    //     }
    //     else if (arr[i]<0) {
    //         console.log(arr[i], '< 0');
    //     }
    //     else{
    //         console.log(arr[i], ' = 0');
    //     };
    // }

    // TRY - Calculating the ratios of positive, negative and zero values in the array
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for (let j = 0; j < arr.length; j++) {
        positive = arr.filter (a => a > 0);
        negative = arr.filter (a => a < 0);
        zeros = arr.filter (a => a = 0);
        // else if (arr[j] < 0) {
        //     return arr.reduce((a, b) => a +b);
        // }
        // else {
        //     return arr.reduce((a, b) => a +b);
        // }
    }
    // ?Testing - Return the sum of positive values
    return positive.reduce((a, b) => a + b); // 8 = 3 + 4 + 1

}
// Check and Test
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// Expected Output
/*
-4 < 0
3  > 0
-9 < 0
0  = 0
4  > 0
1  > 0
*/


