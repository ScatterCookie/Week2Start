let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}

let imageShowElem = document.querySelector(".imageShow");
let showOrHideElem = document.getElementById("feature");

imageShowElem.addEventListener("click", () => {
  console.log("hello");
  if (showOrHideElem.style.display == "inline") {
    showOrHideElem.style.display = "none";
  } else {
    showOrHideElem.style.display = "inline";
  }
});
