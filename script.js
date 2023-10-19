const ageInYearsPlaceholder = document.getElementById("yearsPlaceholder");
const ageInMonthsPlaceholder = document.getElementById("monthsPlaceholder");
const ageInDaysPlaceholder = document.getElementById("daysPlaceholder");

function validateDate(day, month, year) {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year > currentYear ||
    (year === currentYear && month > currentMonth) ||
    (year === currentYear && month === currentMonth && day > currentDay)
  ) {
    return false;
  }
  const daysInMonth = new Date(year, month, 0).getDate();

  return day <= daysInMonth;
}

//calculating current day
function ageCalculator() {
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  if (day === "" || month === "" || year === "") {
    alert("Please enter all the values");
    return;
  }

  const dayValue = parseInt(day, 10);
  const monthValue = parseInt(month, 10);
  const yearValue = parseInt(year, 10);

  if (!validateDate(dayValue, monthValue, yearValue)) {
    alert("Invalid date format!");
    return;
  }

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
