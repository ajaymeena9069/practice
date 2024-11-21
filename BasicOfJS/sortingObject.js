const myObj = {
    name : ["Ajay" , "Tarun" , "Aayush" , "Vivek" , "Yuvraj" , "Akanshu"],
}
function myFunc(a,b) {
    return a.localeCompare(b);
}
let ans = myObj.name.sort(myFunc);
console.log(ans);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const myObj = {
//   name: ["Ajay", "Tarun", "Aayush", "Vivek", "Yuvraj", "Akanshu"],
// };
// const ans = myObj.name.sort();
// console.log(ans);