let num1 = (num2, num3) =>{
   return  num2 + num3
}
console.log(num1(5, 8));

//old javascript
var user = {
   name: "Femi", 
   age: 30
}
var myName = user.name;    //OBJECT DECONSTRUCTION
var myAge = user.age;
console.log("I am " + myName + " and I am " + myAge + " years old");
//ES6 OBJECT DECONSTRUCTION
const list = {
   name: "Shopping List", 
   items: ["meat", "fish", "beef"]
};
const {name, items} = list;
console.log(name);
console.log(items);