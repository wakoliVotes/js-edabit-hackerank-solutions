fun sumArray(numbers: Array<Int>): Int {
    var sum = 0
    for (number in numbers) {
        sum += number
    }
    return sum
}

fun main() {
    val numbers = arrayOf(1, 2, 3, 4, 5)
    println("Sum of array: ${sumArray(numbers)}")
}