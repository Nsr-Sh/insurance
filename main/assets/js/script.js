// ----------select elements------------
const form = document.querySelector("#form"),
  model = document.querySelector("#select-model"),
  year = document.querySelector("#select-year"),
  type = document.querySelector("input[type=radio]:checked"),
  result = document.querySelector("#result");
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
