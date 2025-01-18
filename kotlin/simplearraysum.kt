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

fun simpleArraySum(numbers: Array<Int>: Int){
    var sum
    for(number in numbers){
        sum += number        
    }
    return sum
}

// Test Runs
fun main() {
    val numbers = arrayOf(1, 2, 3, 4, 5)
    println("Sum of array: ${sumArray(numbers)}")
}