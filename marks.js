// Function to determine the grade based on the marks
function getGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks > 49 && marks < 60) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
}
// Assign a  value to the marks

const marks = 49;
getGrade(marks);
// Call the getGrade function with the given marks and output the result

// Before that, check if the input marks are valid (between 0 and 100)

if (marks >= 0 && marks <= 100) {
  console.log(`The grade is: ${getGrade(marks)}`);
} else {
  console.log("Invalid input. Please enter marks between 0 and 100.");
}
