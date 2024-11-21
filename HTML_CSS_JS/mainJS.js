// var a = document.querySelector("h3");
// a.innerHTML="lgooo";
// a.style.color = "green"
// a.style.fontSize = "80px"
// a.addEventListener("click",function(){
//     a.innerHTML="Changed";
//     a.style.background = "black";
//     a.style.color = "white";
// })
// console.log(a);

var a = document.querySelector("button");
var count = 0;
a.addEventListener("click", function () {
  if (count === 0) {
    var b = document.querySelector("#light");
    console.log("Clicked");
    if (count === 0) {
      a.innerHTML = "on";
    }
    b.style.background = "yellow";
    count = 1;
  } else if (count === 1) {
    var b = document.querySelector("#light");
    if (count === 1) {
      a.innerHTML = "off";
    }
    console.log("Again Clicked");
    b.style.background = "transparent";
    count = 0;
  }
});
