// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function sumOfFirstNEvenNumbers(n: number) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    let evenNumber = 2 * i;
    sum += evenNumber;
  }

  return sum;
}

let n = 20;
let result = sumOfFirstNEvenNumbers(n);
console.log(`The sum of first ${n} even numbers is: ${result}`);
