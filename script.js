function resetPlaceholders() {
  const placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach((placeholder) => {
    // Reset the text content and opacity
    placeholder.textContent = "--";
    placeholder.style.opacity = 0;
  });
}

function updateAgeWithTransition(placeholder, newValue) {
  const newSpan = document.createElement("span");
  newSpan.textContent = newValue;

  // Set its class for CSS transition
  newSpan.className = "placeholder transition-opacity";

  // Set initial opacity to 0 for the transition
  newSpan.style.opacity = 0;

  // Replace the placeholder with the new element
  placeholder.parentNode.replaceChild(newSpan, placeholder);

  // Trigger the transition by setting opacity to 1 with a slight delay
  setTimeout(function () {
    newSpan.style.opacity = 1;
  }, 10);

  console.log(newValue);
}

myFunction = (event) => {
  event.preventDefault();

  resetPlaceholders(); // Reset the placeholders when the form is submitted

  // Your age calculation logic remains the same
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  console.log(day, month, year);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageInDays = currentDate.getDate() - birthDate.getDate();

  if (ageInDays < 0) {
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageInDays += daysInLastMonth;
    ageInMonths--;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  if (ageInDays < 0 && ageInMonths === 0) {
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageInDays += daysInLastMonth;
    ageInMonths = 11;
  }

  // Update the placeholders with the calculated values
  const placeholders = document.querySelectorAll(".placeholder");
  updateAgeWithTransition(placeholders[0], ageInYears);
  updateAgeWithTransition(placeholders[1], ageInMonths);
  updateAgeWithTransition(placeholders[2], ageInDays);
};

// Attach the event listener to the form
const ageCalcForm = document.getElementById("ageCalc");
ageCalcForm.addEventListener("submit", myFunction);
