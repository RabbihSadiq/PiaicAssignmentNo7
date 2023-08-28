// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
function printOddNumbers(numbers: number[]) {
  for (let num of numbers) {
    if (num % 2 != 0) {
      console.log(num);
    }
  }
}

let numberArray = [2, 65, 58, 5, 499, 5, 658, 5, 6, 58, 6, 7, 6, 11781, 4];
printOddNumbers(numberArray);
