const arr = [1,2,3,4,5,6,7,8,9];
function myFunc(number) {
    return number%2==0;
}
let ans = arr.filter(myFunc);
console.log(ans);