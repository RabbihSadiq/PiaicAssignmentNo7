//  Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function printEvenNumbers(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
var numberArray = [2, 65, 58, 5, 499, 5, 658, 5, 6, 58, 6, 7, 6, 11781, 4];
printEvenNumbers(numberArray);
