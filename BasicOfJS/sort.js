//>>>>>>>>>>>>>>>>>>>>>
//** This MEthode is use for acending order */

// const arr = [9,5,1,6,6,2,4,0,3,0];
// const myFunc = (a,b) => {
//     return a - b;
// }
// const ans = arr.sort(myFunc);
// console.log(ans);

//>>>>>>>>>>>>>>>>>>>>>>>
//** This methode are use for descending */
// for descending oder you have to try this following logic for ex. (a-b) is for asc just swape it (b-a);

const arr = [9,5,1,6,6,2,4,0,3,0];
const myFunc = (a,b) => {
    return b - a;
}

const ans = arr.sort(myFunc);
function myfunc2(number) {
    return number;
}
ans.forEach(function(ans1){
    console.log(ans1);
});

