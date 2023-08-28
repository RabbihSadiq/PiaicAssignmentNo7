// Write a program that uses a function to find the largest element in an array of numbers.
function findLargestNumber(numbers) {
    var i = 1;
    var largest = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
        i++;
    }
    return largest;
}
var array = [5, 5, 9, 615, 82, 46, 519, 8312, 9];
var largestNumber = findLargestNumber(array);
console.log("Largest Number in array is", largestNumber);
