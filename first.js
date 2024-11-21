// var a=18;
// let b=50;

// function sum(){
//     let sum = a + b;
//     console.log(sum);
// }
// sum();

// let name1 = "ajay";
// let age = 18;
// let aboutMe1 = "my name is" + " " + name1 + "my age is" + " " + age

// let aboutMe = `my name is ${name1} my age is ${age}`

// console.log(aboutMe1 + aboutMe);

// let name = "ajay";
// var name2 = "ajay";

// if (name == name2) {
//     console.log("String is equal");
// } else {
//     console.log("nah string is not equal");
// }

// let firstName = null;

// if (firstName) {
//     console.log(firstName);
// } else {
//     console.log("yeh empty hai")
// }

// let drink = "Daaru"
// let softDrink = "Milk"
// age = 10;
// console.log("We have only 2 drink")
// console.log("1. Milk 2.Daaru");
// if (age>=18) {
//     console.log("You can drink daaru");
// } else {
//     console.log("You can drink milk only");
// }

// let age2 = 10;
// let drink2 = age2>=18 ? "you can drink daaru" : "you can drink milk only";
// console.log(drink2);

// let name = "Ajay";
// age = 19;

// if (name[0] === 'A'&& age>=18) {
//     console.log("Your name first charcter is star with 'A' and you are age is more than or equla to 18")
// } else {
//     console.log("condition not matched")
// }

// let winingNumber = 19;
// let guessNumber = prompt("guess a number");

// if (guessNumber>= 19) {
//     console.log("You guess rught number");
// } else if(guessNumber > winingNumber){
//     console.log("too high..");
// } else if(guessNumber < 19){
//     console.log("too low..");
// }

// let i = 0;
// while(i <= 9){
//     i++;
//     console.log(i)
// }
// console.log("ajay")

// let i = 0;
// let total = 0;

// while (i<=10) {
//     total = total + i;
//     i++
//     console.log(total)
// }

// let total = 0;
// for(let i = 0 ; i <=10 ; i++) {
//     total = total + i;
//     console.log(total);
// }

// let i = 0;
// do {
//     i++
//     console.log(i);
// } while (i<=10);

// let mobile = ["samsung" , 60 , "redmi" , "iphone"];
// console.log(typeof mobile);

// let mobile = ["samsung" , 60 , "redmi" , "iphone"];
// console.log(typeof mobile);
// console.log(Array.isArray(mobile));
// //push and pop
// mobile.push("vivo");
// console.log(mobile);
// let popped = mobile.pop();
// console.log(mobile);
// console.log("This is a popped element :  " + popped);
// //shift and unshift
// mobile.shift();
// console.log(mobile)
// mobile.unshift("samsung");
// console.log(mobile);

// let mobile2 = [] = mobile.slice(0);
// mobile2.push("realme");
// console.log(mobile2)

// let Array2=[...mobile , "realme"]
// console.log(Array2);

// let array = ["bike", "car", "mobile", "T.V.", "realme"];
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// let i = 0;
// while (i<array.length) {
//     i++;
//     console.log(array[i])
// }

// for(let get of array){
//     console.log(get)
// }
// let value1 = array[0];
// let value2 = array[1];
// console.log(value1 , value2)

// let[value1 , value2] = array;
// console.log(value1 , value2);

// const items = {
//     car : "fortuner",
//     bike : "bullet",
//     mobile : "s24 ultra",
//     array : ["fortuner" , "bullet" , "s24 ultra"] 
// }
// items.name = "ajay"
// console.log(typeof items)

// console.log(items["car"]);
// console.log(items.mobile); // we cant use this method when we use spaces in our keys..
// console.log(items["array"])

// let va = "kkkk";

// imp ------> we have two methods to itrate object key value 1. for in loop 2. Object.key(object_name)
// const value = "org";
// const obj = {
//     demo1 : "d1",
//     demo2 : "d2",
//     demo3 : "d3",
//     demo4 : "d4",
// }
// console.log(obj);
// obj.value = "ajay";
// for(let values in obj){
//     // console.log(obj[values]);
//     // console.log(`${values} : ${obj[values]}`)
//     console.log(values , "  " , obj[values])
// }

//second methode mai hame for of loop use karna padega...
//for example...
//this is a second method---->>>
// for(const ans of Object.keys(obj)){
//     console.log(obj[ans])
// }

// for(const getElement of Object.keys(obj)){
//     console.log(getElement);
//     console.log(obj[key])
// }

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log("First msg --> ",obj)
// obj[key1] = value1;
// obj[key2] = value2;
// console.log("Sec msg --> ",obj)


// const gendu = {
//     name1 : "Ajay",
//     subject1 : "BBA",
//     name2 : "Aayush",
//     subject2 : "BCA"
// }
// //*** line of code increase hua hai
// const name1 = gendu.name1;
// const subject1 = gendu.subject1;
// console.log(name1,subject1);
// const name2 = gendu.name2;
// const subject2 = gendu.subject2;
// console.log(name2,subject2);
// //*** short methode
// const {neme1 , sub1 , neme2 , sub2} = gendu;
// console.log(neme1 , sub1)
// console.log(neme2 , sub2)


// function isEven(num1){
//     if (num1%2===0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// ans = isEven(2);
// console.log(ans)

// function demo1(string){
//     return string[0];
// }
// console.log(demo1("ajay"))

// function myFunction(array = [] , target ) {
//     let i;
//    for(i = 0 ; i<array.length ; i++){
//     if (array[i] === target) { 
//         return i;
//        } 
//    }
//    return console.log("there is no element matched those present in target");
// }
// ans = myFunction([1,2,3,4,5,6,7,8,9,0] , 7);
// console.log(ans);


// const functionExpression = function () {
//     console.log("this is a function expression")
// }
// let ans=functionExpression();
// console.log(ans);


// const arrowFunction = () => {
//     console.log("this is a arrow function")
// }

// let ans1=arrowFunction();
// console.log(ans);

// ===>> arrow function or chota kar diya h :-:

// const firstCharacter = name => name[0];
// ans = firstCharacter("ajay");
// console.log(ans);

// function exp1() {
//     console.log("f1")
// }

// const exp =  function(){
//     console.log("f1")
// }
// console.log(exp())

// const myvalue ="high lvl priortiy"
// function myFunction1(){
//     // const myvalue = "mid lvl priortiy";
//     const myFunction2 = function() {
//         // const myvalue = "low lvl priortiy";
//         console.log(myvalue);
//     }
//     const myFunction3 = (name) => {
//         return name[0];
//     }
//     const calc = number => number%2===0;
//     console.log(myvalue);
//     myFunction2();
// }
// myFunction1();

// 1. program of arry imp methods!!!!

// const arr = [9,5,1,6,6,2,4,0,3,0];

// function mulplyby2(index , number) {
//    console.log("Index is : " , index);
//    console.log("Number is : " , number * 2);
// }
// for(let i = 0 ; i<arr.length ; i++) {
//     mulplyby2(i , arr[i]);
// }


// const arr = [9,5,1,6,6,2,4,0,3,0];
// function numberSquare(number){
//     return (number*number);
// }
// const newArr = arr.map(numberSquare);
// console.log(newArr)

// const array=[1,2,3,4,5,6,7,8,9,0];

// function usingMapFunction(){
//     return array;
//     // console.log(array)
// }
// newArray = array.map(usingMapFunction);
// console.log(newArray)

// const array = [1,2,3,4,5,6,7,8,9,10];
// const callBackFun = function(number){
//     return number%2===0;
// }
// const newArray = array.filter(callBackFun);
// console.log(newArray);


// const array = [1,2,3,4,5,6,7,8,9,10];
// const newArray = array.filter((number)=>{
//     return number%2===0;
// });
// console.log(newArray);


// const array = [1,2,3,4,5,6,7,8,9,10];
// const newArray = array.reduce((number , number2) => {
//     return number + number2;
// })

// console.log(newArray);

// const array = [1,2,3,4,5,6,7,8,9,10];
// array.reduce((              )=>{});

// let num = 100;
// let convert = String(num);
// console.log(typeof convert);
// console.log(typeof Number(convert));