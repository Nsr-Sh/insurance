// ----------select elements------------
const form = document.querySelector("#form"),
  selectModel = document.querySelector("#select-model"),
  selectYear = document.querySelector("#select-year"),
  userCar = document.querySelector("#user-car"),
  userYear = document.querySelector("#user-year"),
  userType = document.querySelector("#user-type"),
  cost = document.querySelector("#cost");

// ----------functions---------------
// adding images to each option
function changeImage(element) {
  document.querySelector("#car-img").src =
    "assets/" + "images/" + element.value + ".png";
}
// ------
// tabdile sale miladi be shamsi
function dateConvertor() {
  return (shamsiDate = new Date().getFullYear() - 621);
}

// tolide yek range az adad ba dadane adade ebtdaei va tedad(tool)
function createRange(start, length) {
  return Array.from({ length: length + 1 }, (_, i) => start - i);
}

// Function insertDate
// darje optionhaye marbot be sale saakhte mashin dar safhe
// vorodi:length=tole baze zamani
// khoroji:darje option az emsal ta n sale ghable(n:lenght dade shode be onvane vorodi)

let html = "";
function insertDate(length) {
  const shamsiYear = dateConvertor();
  const rangeArray = createRange(shamsiYear, length);
  rangeArray.forEach((item) => {
    html += `<option value="${item}">${item}</option>`;
  });
  selectYear.insertAdjacentHTML("beforeEnd", html);
}

insertDate(20);

// ----------class-------------------
// Class Factor:this class creates a insurance factor
// object based on input parameter
// input:car model, car year ,insurance type
class Factor {
  constructor(model, year, type) {
    this.model = model;
    this.year = year;
    this.type = type;
    this.price = 3000;
    this.yearIncrease();
    this.typeIncrease();
    this.modelIncrease();
  }

  yearIncrease(val = 2) {
    const diff = 1402 - this.year;
    return (this.price = this.price + (this.price * diff * val) / 100);
  }

  typeIncrease(s = 20, c = 35) {
    this.type === "Simple"
      ? (this.price = this.price + (this.price * s) / 100)
      : (this.price = this.price + (this.price * c) / 100);
    return this.price;
  }

  modelIncrease() {
    switch (this.model) {
      case "BMW":
        this.price = this.price + (this.price * 30) / 100;
        break;
      case "lamborghini":
        this.price = this.price + (this.price * 25) / 100;
        break;
      case "pourshe":
        this.price = this.price + (this.price * 40) / 100;
        break;
      case "pride":
        this.price = this.price + (this.price * 10) / 100;
        break;
      default:
        this.price = this.price + (this.price * 20) / 100;
    }
    return this.price;
  }
}
// const summery = new Factor("pourshe", 1400, "simple");
// ------------event-----------------
// event submit form: get inputs from user
//  make new insurance object and call showFactor function

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const year = selectYear.value,
    model = selectModel.value,
    type = document.querySelector("input:checked+label").textContent;
  console.log(year, model, type);
  const factor = new Factor(model, year, type);
  console.log(factor);
  showFactor(factor);
});

// -------------------------------
// Function showFactor:display result
function showFactor(factor) {
  userCar.textContent = `✔ Car : ${factor.model}`;
  userYear.textContent = `✔ Year : ${factor.year}`;
  userType.textContent = `✔ Type : ${factor.type}`;
  cost.textContent = `${Math.round(factor.price)} $`;
  result.style.display = "flex";
  const timeFun = setTimeout(function () {
    result.style.opacity = 1;
  }, 200);
}
