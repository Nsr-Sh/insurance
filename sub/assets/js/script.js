// adding images to each option
function changeImage(element) {
  document.querySelector("#car-img").src =
    "assets/" + "images/" + element.value + ".png";
}

// calculator

const form = document.getElementById("form");
const html = new PAGE();
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    html.displayYears();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Selected values in form
    const calculation = document.getElementById("calculation").value;
    const year = document.getElementById("select-year").value;
    // Reading radio button value
    const level = document.querySelector('input[name="level"]:checked').value;
    // validate inputs empty or not
    if (calculation === "" || year === "" || calculation === "") {
      html.displayError("All fields are empty ...");
    } else {
      // remove existing div
      const prevResult = document.querySelector("#result div");
      if (prevResult != null) {
        prevResult.remove();
      }
      // create and print insurance
      const insurance = new Insurance(calculation, year, level);
      const price = insurance.calculateQuote(insurance);
      console.log(insurance, price);
      // printing result in html
      html.showResults(price, insurance);
    }
  });
}
// calculation of insurance base on insurance level and car model and year
function Insurance(calculation, year, level) {
  // reference to elements
  this.calculation = calculation;
  this.level = level;
  this.year = year;
}
// creating price calculation and base for insurance
Insurance.prototype.calculateQuote = function (insurance) {
  let price;
  const base = 2000;
  const calculation = insurance.calculation;

  switch (calculation) {
    case "bmw":
      price = base * 1.4;
      break;
    case "lamborghini":
      price = base * 1.3;
      break;
    case "porsche":
      price = base * 1.2;
      break;
    case "pride":
      price = base * 1.1;
      break;
  }

  // calculating differences (year and model of car and level of insurance)
  const year = insurance.year;
  const diff = this.getYearDifference(year);
  // price
  price = price - (diff * 3 * price) / 100;

  const level = insurance.level;
  price = this.calculateLevel(price, level);
  return price;
};
// getting new date
Insurance.prototype.getYearDifference = function (year) {
  return new Date().getFullYear() - year;
};
// insurance level calculation
Insurance.prototype.calculateLevel = function (price, level) {
  if (level === "basic") {
    price = price * 3;
  } else if (level === "comprehensive") {
    price = price * 4;
  }
  return price;
};

//Using protyping to create an object.
function PAGE() {}
// get new current year and display latest 20 years

PAGE.prototype.displayYears = function () {
  // maximum and minimum year display
  const max = new Date().getFullYear() - 621;
  const min = max - 20;

  // generate 20 years into option

  const selectYears = document.getElementById("select-year");
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
  }
};

//ERROR DISPLAY
PAGE.prototype.displayError = function (msg) {
  //creating a div for message
  const div = document.createElement("div");
  div.classList = "error";

  
  div.innerHTML = `<p>${msg}</p>`;

  form.insertBefore(div, document.querySelector(".select-year"));
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 3000);
};

//Making results

PAGE.prototype.showResults = function (price, insurance) {

  //div for results
  const div = document.createElement("div");
  let calculation = insurance.calculation;

  div.innerHTML = `<div id="result">
<h4 id="result-title">result</h4>
<div id="userdata">
  <span>✔ Car : ${calculation}</span>
  <span>✔ Year : ${insurance.year}</span>
  <span>✔ Type : ${insurance.level}</span>
</div>
<div id="cost"><span>${price}t</span></div>
</div> `;
  // loading
  const spinner = document.querySelector("#loading");
  console.log(spinner.style);
  spinner.style.display = "block";
  setTimeout(() => {
    spinner.style.display = "none";
    result.appendChild(div);
  }, 3000);
};
