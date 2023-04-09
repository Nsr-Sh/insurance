// Search Bar selector
const selectBox = document.querySelector(".car-selector");
const selectOption = document.querySelector(".car-option");
const soValue = document.querySelector("#soValue");
const optionSearch = document.querySelector("#carSearch");
const options = document.querySelector(".options");
const optionsList = document.querySelectorAll(".options li");
// dropdown menu
selectOption.addEventListener("click", function () {
  selectBox.classList.toggle("active");
});
// selecting option
optionsList.forEach(function (optionsListSingle) {
  optionsListSingle.addEventListener("click", function () {
    text = this.textContent;
    soValue.value = text;
    selectBox.classList.remove("active");
  });
});
// search and find keyword
optionSearch.addEventListener("keyup", function(){
  let filter , li, i , textValue;
  filter = optionSearch.value.toUpperCase();
  li = options.getElementsByTagName("li");
  for (i = 0; i < li.length; i++){
    liCount = li[i];
    textValue = liCount.textContent || liCount.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else li[i].style.display = "none";
  }
});
