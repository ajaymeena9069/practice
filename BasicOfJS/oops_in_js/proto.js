// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = Object.create(obj1);
// key3: "value3",
// console.log(obj2.key1);
// sessionStorage.setItem('name' , "Ajay");
// console.log(sessionStorage.getItem('name'))


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//my project using prototype

function userInfo(userName, userEmail, userAge, address) {
  const myObj = Object.create(userInfo.prototype);
  myObj.userName = userName;
  myObj.userEmail = userEmail;
  myObj.userAge = userAge;
  myObj.address = address;
  return myObj;
}
userInfo.prototype.is18 = function () {
  if (this.userAge >= 18) {
    return "Uaer is 18+";
  } else {
    return "nah user in not 18 or 18+";
  }
}

