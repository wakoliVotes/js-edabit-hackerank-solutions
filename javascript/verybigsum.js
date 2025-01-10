/*

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints
      1 ≤ n ≤ 10^3
      -10 ≤arr[i] ≤ 10^4

*/

// See question https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
    return ar.reduce((a, b) => (a + b));
}
console.log(aVeryBigSum([11111234, 455555555555555, 5555555555555, 6666666]))   // 461111128889010

// !TODO - Recheck