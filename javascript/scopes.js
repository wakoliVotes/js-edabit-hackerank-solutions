// Scopes
// Question: Consider the function below
// What will be logged to the console and why? Explain each step.

var x = 10;

function outerFunction () {
    console.log(x);  // 1.?
    var x = 20;

    if (true) {
        let y = 30;
        const z = 40;
        console.log(y);    // 2.?
        console.log(z);    // 3.?
    }

    console.log(y);    // 4.?
    console.log(z);    // 5.?
}

outerFunction();


/*

Explanation:
1. console.log(x):

Inside the function, a new var x is declared. Due to hoisting, x is moved to the top of the function but remains undefined until the line where it’s assigned (var x = 20).
Output: undefined.

2. console.log(y) (inside if block):

y is declared using let within the block. It is accessible inside the block, so it logs the value 30.
Output: 30.

3. console.log(z) (inside if block):

z is declared using const within the block. It is accessible inside the block, so it logs the value 40.
Output: 40.

4. console.log(y) (outside if block):

y is block-scoped (declared using let). It is not accessible outside the if block.
Output: ReferenceError: y is not defined.

5. console.log(z) (outside if block):

z is block-scoped (declared using const). It is not accessible outside the if block.
Output: ReferenceError: z is not defined.

*/
