myFunction = (event) => {
  event.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

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
  yearsPlaceholder.textContent = ageInYears;
  monthsPlaceholder.textContent = ageInMonths;
  daysPlaceholder.textContent = ageInDays;
};

// Attach the event listener to the form
const ageCalcForm = document.getElementById("ageCalc");
ageCalcForm.addEventListener("submit", myFunction);
