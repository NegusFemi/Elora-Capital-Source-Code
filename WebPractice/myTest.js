const shoppingList = ["Body lotion", "Body spray", "Hair cream", "Rollon"];

shoppingList.forEach(item =>{
    console.log(item);
});

myNewList = shoppingList.map(item =>{
    console.log(item);
})

const Person = {
    name: "John",
    age: "16",
    occupation: "Programmer",
    personExplained: () => {
        console.log(`Hello, I'm ${Person.name}, I'm ${Person.age} years old and
         I'm a ${Person.occupation}`);
    }
};
Person.personExplained();