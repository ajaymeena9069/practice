// index , delete , insert 
//splice() mai yeh rules follow hota ha add ya remove karne ke liye
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//this is for remove....

// const arr = [1,2,3,4,5,6,7];
// arr.splice(2,1) 
// console.log(arr)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//this is for add....

// const arr = [1,2,4,5,6,7]; // we want to add '3';
// arr.splice(2 , 0 , 3);
// console.log(arr)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//this for add & remove [both];

const arr = [1,2,4,5,6,7];
arr.splice(2, 2   , 3 , 4)
console.log(arr);