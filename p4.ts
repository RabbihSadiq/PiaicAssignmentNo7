//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius: number) {
  let a = Math.PI * radius * radius;
  return a;
}
let radius = 5;
let area = areaOfCircle(radius);
console.log(`Area of Given Number ${radius} is ${area}`);
