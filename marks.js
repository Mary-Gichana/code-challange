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

const marks = 60;
getGrade(marks);

// Convert the input to a number and check if it's valid

if (marks >= 0 && marks <= 100) {
  console.log(`The grade is: ${getGrade(marks)}`);
} else {
  console.log("Invalid input. Please enter marks between 0 and 100.");
}
