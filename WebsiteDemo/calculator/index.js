
let inputBox = document.getElementById("output");
let num1 = 0;
let num2 = 0;

let wholeNum = '';
// console.log("kdjfkjdsf"  ,one,two,three,four,five,six,seven,eight,nine)
let SelectedElement = document.getElementById("calculator");
SelectedElement.addEventListener("click", (event) => {
    let currentValue = event.target.value;
let total;
    let plus = 0;
    let minus = 0;
    let into = 0;
    let devide = 0;

    if (plus > 0) {
        let p = num1 + num2;

    }
    console.log(currentValue)

    switch (currentValue) {
        case '+':
            plus++;

            break;

        case '-':
            minus++;


            break;
        case '*':
            into++;

            break;

        case '/':
            devide++;

            break;


        default:
            break;
    }


});


