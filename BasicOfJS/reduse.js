const arr = [1,2,3,4,5,6,7,8,9,10];
function myFunc(num1 , num2) {
    return num1 - num2;
}
const arr2 = arr.reduce(myFunc);
console.log(arr2);
