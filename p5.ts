//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let grades: number[] = [55, 95, 14, 12, 96, 15, 31, 69, 84, 100];
function removeFailingGrades(marks: number[]): number[] {
  for (let i = marks.length - 1; i >= 0; i--) {
    if (marks[i] < 50) {
      marks.splice(i, 1);
    }
  }
  return marks;
}
let updatedGrades = removeFailingGrades(grades);
console.log(`List of Passing Grades`, updatedGrades);
