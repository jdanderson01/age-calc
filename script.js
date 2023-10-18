const ageInYearsPlaceholder = document.getElementById("yearsPlaceholder");
const ageInMonthsPlaceholder = document.getElementById("monthsPlaceholder");
const ageInDaysPlaceholder = document.getElementById("daysPlaceholder");

//calculating current day
function ageCalculator() {
  const date = new Date();

  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  console.log(currentDate);

  //function to retrieve day value from the form
  // Prevent the form from submitting normally

  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  //age in years, months, and days
  let ageInYears = currentYear - yearValue;
  let ageInMonths = currentMonth - monthValue;
  let ageInDays = currentDay - dayValue;

  if (ageInDays < 0) {
    const daysInLastMonth = new Date(
      currentYear,
      currentMonth - 1,
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
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    ageInDays += daysInLastMonth;
    ageInMonths = 11;
  }

  let currentAge = `${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days`;

  //append the current age to the DOM
  ageInYearsPlaceholder.textContent = ageInYears;
  ageInMonthsPlaceholder.textContent = ageInMonths;
  ageInDaysPlaceholder.textContent = ageInDays;

  console.log(currentAge);
}

ageCalc.addEventListener("submit", function (event) {
  event.preventDefault();
  ageCalculator();
});
