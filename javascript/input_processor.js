// Standard Input Processor in Node.js

/*

This code serves as a foundational template for handling standard input (stdin) in Node.js applications.
It efficiently reads input data from the command line, processes it line by line, and prepares it for further logic implementation. 
Commonly used in competitive programming and interactive programs, this setup includes event listeners to collect input, 
parse it into an array of lines, and provides a helper function (`readLine`) for sequential line-by-line access. 
Its modular design makes it versatile for a wide range of applications.


*/


const fs = require('fs');
const input_stdn = fs.readFileSync('input.txt', 'ascii');

const input_stdn_array = input_stdn.split("\n");
let input_currentLine = 0;

function readLine() {
    return input_stdn_array[input_currentLine++];
}

main();


function main() {
    const n = parseInt(readLine().trim());   /// Read the first line as an integer
    for (let i = 0; i < n; i++) {
        console.log(readLine());     /// Read and print each subsequent line
    }
}