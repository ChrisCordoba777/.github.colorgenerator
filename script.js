let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("randombutton1");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  //Show color codes
  css.textContent = body.style.background + ";";
}

//Try to randomize colors when this button is clicked ⛔️
randomBtn.addEventListener("click", function () {
  console.log("Button Clicked!");
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
