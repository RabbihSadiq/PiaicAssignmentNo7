// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfFirstNEvenNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        var evenNumber = 2 * i;
        sum += evenNumber;
    }
    return sum;
}
var n = 20;
var result = sumOfFirstNEvenNumbers(n);
console.log("The sum of first ".concat(n, " even numbers is: ").concat(result));
