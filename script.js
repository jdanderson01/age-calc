const ageCalc = document.getElementById("ageCalc");

//function to retrieve day value from the form
ageCalc.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const day = document.getElementById("day");
  const dayValue = day.value;
  console.log("Day value: " + dayValue);
});
