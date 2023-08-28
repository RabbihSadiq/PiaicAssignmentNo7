//  Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function printEvenNumbers(numbers: number[]) {
  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

let numberArray = [2, 65, 58, 5, 499, 5, 658, 5, 6, 58, 6, 7, 6, 11781, 4];
printEvenNumbers(numberArray);
