/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals. 
For example, the square matrix art is shown below: 123 456 989 The left-to-right diagonal 1+5+9=15. 
The right to left diagonal 3+5+9=17. Their absolute difference is 15-17 = 2. 
Function description Complete the diagonalDifference function in the editor below. diagonalDifference takes the following parameter: 
int arr[n][m]: an array of integers Return int: the absolute diagonal difference Input Format
The first line contains a single integer, 1, the number of rows and columns in the square matrix arr.
Each of the next 2 lines describes a row. arr[i], and consists of n space-separated integers arr[i][j] 

Constraints 
-100 arri≤ 100 

Output
Format Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input 
3
11 2  4
4  5  6
10 8 -12

Sample Output 15 

*/

function diagonalDifference(arr) {
    // Display the whole matrix
    // for (let i = 0; arr.length; i++) {
    //     return console.log(arr);
    // }
    // Pick items from left to right
    for (let i = 0; arr.length; i++) {
        leftToRights = [(arr[0][0]), (arr[1][1]), (arr[2][2])];        
    }
    // Pick items from right to left diagonally
    for (let j = 0; arr.length; j--) {
        rightToLefts = [(arr[0][2]), (arr[1][1]), (arr[2][0])];
    }
    return arr;
}
console.log (diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8,-12]]));