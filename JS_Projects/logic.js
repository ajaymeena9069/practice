var box = document.querySelector(".box");
var icon = document.querySelector("i");

box.addEventListener("dblclick" , function(){
  icon.style.transform = "translate(-100% , -50%) scale(1);";
  setTimeout(function(){
    icon.style.transform = "translate(-100% , -50%) scale(0);";
  })
})