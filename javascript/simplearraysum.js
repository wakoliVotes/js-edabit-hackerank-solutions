/*

Given an array of integers, find the sum of its elements.

For example, if the array ar = [1, 2, 3. 1 + 2 + 3 = 6, so return 6.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints

0 < n, ar[i] < 1000


Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11

*/
'use strict';

function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b, 0);
    // reduce() method reduces the array to a single value.
    // Iteration: For each element in the array, 
    // the callback function (a, b) => a + b adds the current element 
    // to the accumulator.
    }

console.log(simpleArraySum([11, 12, 13]));   // 36