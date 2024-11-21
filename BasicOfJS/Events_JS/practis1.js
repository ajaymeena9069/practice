let allButtons = document.querySelectorAll(".button");

for (const element of allButtons) {
  element.addEventListener("click", function () {
    element.style.backgroundColor = "red";
  });
}
