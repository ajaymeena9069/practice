const information = (userName, userEmail, userAge, address) => {
  const myObj = {};
  myObj.userName = userName;
  myObj.userEmail = userEmail;
  myObj.userAge = userAge;
  myObj.address = address;
  return myObj;
};
function printInfo(info) {
  console.log(`User name is - ${info.userName}`);
  console.log(`User email is - ${info.userEmail}`);
  console.log(`User address is - ${info.address}`);

  if (info.userAge >= 18) {
    console.log(`age - ${info.userAge} yea user age is 18 or 18+`)
  } else {
    console.log(`age - ${info.userAge} no user are not 18+`)

  }

}
const ans = information("Ajay", "ajay@gmail.com", 17, "Indore");
printInfo(ans);
