function fun () {
    console.log(`my name is ${this.name} and my age is ${this.age}`)
    let count = 0;
    count++;
    // console.log(count)
}
const userInfo1 = {
    name : "Ajay",
    age : 18,
    class : "BBA",
    about : fun,
}
const userInfo2 = {
    name : "Tarun",
    age : 20,
    class : "BBA",
    about : fun,
}
const userInfo3 = {
    name : "Aayush",
    age : 22,
    class : "BCA",
    about : fun,
}
const userInfo4 = {
    name : "Yuvraj",
    age : 17,
    class : "BBA",
    about : fun,
}
const userInfo5 = {
    name : "Akanshu",
    age : 18,
    class : "BCA",
    about : fun,
}

userInfo5.about();
userInfo2.about();
