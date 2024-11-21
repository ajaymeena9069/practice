// This is a some method its returning boolean values  
// ye array mai check karta hai ki kya hamare array me se kisi bhi ek element ke upar jo condition hamne di hai wo apply ho rahi hai ya nahi
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const array = [1,3,5,7,9,11,13];
// const ans = array.some((isEven)=>isEven%2==0);
// console.log(ans);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// IRL uses of every();

const array = [
    {productID : 1 , productName : "Mobile" , ProductPrice : 15000},
    {productID : 2 , productName : "T.V." , ProductPrice : 40000},
    {productID : 3 , productName : "Freez" , ProductPrice : 10000},
    {productID : 4 , productName : "A.C." , ProductPrice : 30000},
    {productID : 5 , productName : "Laptop" , ProductPrice : 55000},
]

const ans = array.some((obj) => obj.ProductPrice > 50000);
console.log(ans);