// Write a program that uses a function to find the largest element in an array of numbers.
function findLargestNumber(numbers: number[]) {
  let i = 1;
  let largest = numbers[0];

  while (i < numbers.length) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
    i++;
  }

  return largest;
}
let array: number[] = [5, 5, 9, 615, 82, 46, 519, 8312, 9];
let largestNumber = findLargestNumber(array);
console.log(`Largest Number in array is`, largestNumber);
