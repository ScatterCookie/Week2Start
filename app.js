let counterDisplayElem = document.querySelector(".counter-display");
let counterPlusElem = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

//after click execute function
counterPlusElem.addEventListener("click", () => {});
//adds 1 to the number
counterPlusElem.addEventListener("click", () => {
  counter++;
  counterDisplayElem.innerHTML = count;
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
  updateDisplay();
}
