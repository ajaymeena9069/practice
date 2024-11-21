// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// use of every() its return only boolean values [True,False];

// const array = [2,4,6,8,10,12,14,16,18,20];
// const myFunc = (number) => {
//     return number%2==0;
// }
// const ans = array.every(myFunc);
// console.log(ans);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// IRL uses of every();

const array = [
    {productID : 1 , productName : "Mobile" , ProductPrice : 15000},
    {productID : 2 , productName : "T.V." , ProductPrice : 40000},
    {productID : 3 , productName : "Freez" , ProductPrice : 10000},
    {productID : 4 , productName : "A.C." , ProductPrice : 30000},
    {productID : 5 , productName : "Laptop" , ProductPrice : 45000},
]

const ans = array.every((obj) => obj.ProductPrice < 50000);
console.log(ans);