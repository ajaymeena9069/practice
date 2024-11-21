const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add([
  { name: "Ajay", age: 18, class: "BBA" },
  { name: "Yuvraj", age: 17, class: "BCA" },
]);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(6);
// try {
//   for (const element of [name]) {
//     console.log(element);
//   }
//   console.log(nam);
// } catch (k) {
//   console.log("aayush ", k);
// }
const ans =mySet?.name
console.log()


// for(let items of mySet){
//    if (Array.isArray(items)) {
//     items.forEach(obj => {
//         console.log("Name:", obj.name);
//         console.log("Age:", obj.age);
//         console.log("Class:", obj.class);
//     })
//    }
// }
