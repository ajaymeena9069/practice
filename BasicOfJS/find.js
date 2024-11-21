const arr = [
    {id : 1 , name : "Ajay" , age : 18},
    {id : 2 , name : "Yuvraj" , age : 17},
    {id : 3 , name : "Tarun" , age : 20},
    {id : 4 , name : "Vivek" , age : 19},
    {id : 5 , name : "Aayush" , age : 22},
    {id : 6 , name : "Akanshu" , age : 20},
];

let ans = arr.find((obj)=>{
    return obj.id == 3;
})
console.log(ans);