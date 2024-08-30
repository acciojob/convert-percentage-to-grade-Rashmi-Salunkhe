function calculateGrade(percentage) {
  // Round the percentage to the nearest integer
  percentage = Math.round(percentage);

  // Check for invalid (non-numeric or out-of-range) input
  if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    return 'F';
  }

  // Determine the letter grade based on the percentage
  if (percentage >= 90) {
    return 'A';
  } else if (percentage >= 80) {
    return 'B';
  } else if (percentage >= 70) {
    return 'C';
  } else if (percentage >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Example usage:
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
