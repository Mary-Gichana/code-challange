const readline = require('readline');

// Function to determine the grade based on the mark
function getGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <49) {
    return "D";
  } else {
    return "E";
  }
}

// Get the student's mark from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the student\'s mark (between 0 and 100): ', (answer) => {
  let marks = parseFloat(answer);

  // Validate the input
  while (marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a mark between 0 and 100.");
    rl.question('Enter the student\'s mark (between 0 and 100): ', (answer) => {
      marks = parseFloat(answer);
    });
  }

  // Determine the grade using the function
  let grade = getGrade(marks);

  // Output the grade
  console.log(`The student's grade is ${grade}.`);

  rl.close();
});