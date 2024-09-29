function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritPointsPerKm = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

const speed = 120;
checkSpeed(speed);
