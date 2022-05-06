"strict";
let box = document.querySelector(".box");
let sliderValue = document.querySelector(".slider");
// console.log(sliderValue);

let display = document.querySelector(".value");
display.innerHTML = sliderValue.value + "%";

sliderValue.addEventListener("input", (e) => {
  display.innerHTML = sliderValue.value + "%";
  box.style.borderRadius = sliderValue.value + "%";
});
