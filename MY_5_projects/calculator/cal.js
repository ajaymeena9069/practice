// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
let inputBox = document.getElementById("output");

// console.log("kdjfkjdsf"  ,one,two,three,four,five,six,seven,eight,nine)
let SelectedElement = document.getElementById("calculator");
SelectedElement.addEventListener("click", (event) => {
  let fristOprants;
  let secondOprants;
  let operator;
  let valueUser = event.target.value;
  // console.log(valueUser)

  if (valueUser.value == "0") {
    inputBox.value = valueUser;
    fristOprants += valueUser;
  }
  if (valueUser.value == "+" || "*") {
    // let fristOprants = inputBox.value;

    operator = valueUser.value;
    inputBox.value = "0";
  }
  if (valueUser.value == "=") {
    secondOprants = inputBox.value;
  } else {
    inputBox.value += valueUser;
  }
});
