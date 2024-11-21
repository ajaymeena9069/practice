const myArr = [9,5,1,6,2,4,0,3,0];
function myFunc(number , index) {
    console.log("value is " + number , " " , "index is " + index);
    
}
myArr.forEach(function(number , index) {
    myFunc(number , index)
});



