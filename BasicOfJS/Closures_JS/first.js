// function myFunc() {
//     count = 0;
//     return function() {
//         if(count <= 0) {
//             console.log("Hyy you called me...");
//             count ++ ;
//         } else {
//             console.log("You alredy called me...");
//         }
//     }
// }

// const retunFunc = myFunc();
// retunFunc();
// retun
// var n=9;
// function f(){
//     console.log('call function')
 
// }
// function f1(){
    
//     console.log("second",n)
//     f();
// }
// f1()

const mySet = new Set();
mySet.add([1,2,3,4,5,6,7,8,9,10]);
const [myArr] = mySet;
const ans = myArr.filter((num) => num % 2 === 0);
console.log(ans)