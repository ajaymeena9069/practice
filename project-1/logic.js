var button = document.getElementById("b1");
var h4 = document.querySelector("h4");
var divH4 = document.querySelector(".div-h4");
var count = 0;
button.addEventListener("click", function () {
  if (count === 0) {
    count++;
    var updatedText = (h4.textContent = "Following");
    if (updatedText === "Following") {
      button.style.background = "rgba(255, 0, 0, 0.585)";
      divH4.style.background = "lightgreen";
      button.textContent = "Remove";
    }
  } else if (count > 0) {
    var old = h4.textContent = "Follow";
    if (old === "Follow") {
      divH4.style.background="lightblue";
      button.textContent="Add Friend"
      button.style.background="lightgreen"
      count --;
    }
  }
});
