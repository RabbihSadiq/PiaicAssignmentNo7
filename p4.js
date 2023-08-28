//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    var a = Math.PI * radius * radius;
    return a;
}
var radius = 5;
var area = areaOfCircle(radius);
console.log("Area of Given Number ".concat(radius, " is ").concat(area));
