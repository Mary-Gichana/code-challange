// Function to check the speed and calculate demerit points
function checkSpeed(speed) {
  // Define the speed limit and demerit points factor
  const speedLimit = 70;
  const demeritPointsPerKm = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate how many demerit points based on the excess speed
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

//check speed with a value
const speed = 200;
checkSpeed(speed);
