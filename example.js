const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Peach", "Pineapple", "Watermelon"];

//console.log(fruits.concat(fruits2));

//const newFruit = [...fruits,...fruits2].splice(1,3);
//console.log(fruits.findIndex(fruit => fruit === "Mango"));

const todos = [
   { id: 1, task: "Doing" },
   { id: 2, task: "Swiming" },
   { id: 3, task: "Reading" },
   { id: 4, task: "Watching" }
];

//todos.slice(1,3);//ทำไม่ได้
//console.log(todos);

// const newTodo = todos.slice(1,3);
// console.log(newTodo);//{ id: 2, task: "Swiming" },{ id: 3, task: "Reading" },

// todos.splice(1,3);
// console.log(todos);//[ { id: 1, task: 'Doing' } ]

// const idx = todos.findIndex(todo => todo.task === "Swiming");
// todos.splice(idx,1);
// console.log(todos);

// const idx = todos.findIndex(todo => todo.id === 2);
// todos.splice(idx,1);
// console.log(todos);

// todos.push({ id: 5, task: "Running" });
// todos[1].task= "Eating";

// const idx = todos.findIndex(todo => todo.task === "Reading");
// console.log(idx);
// todos[idx].task = "Jogging";
// console.log(todos);

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// console.log(ages.sort());
// console.log(ages.reverse());

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 3);

//console.log(arr); // Bilbo, Gandalf


const persons = [
   { name: "John", age: 17 },
   { name: "Jane", age: 10 },
   { name: "Jim", age: 15 },
   { name: "Os", age: 22 },
   { name: "Natty", age: 19 },
   { name: "Sonter", age: 19 }
];

// for (const person of persons) {
//    if (person.age < 20) {
//       console.log(person.name);
//    };
// };

// let newPerson = persons.reduce((a,b) => a + b.age,0);
// console.log(newPerson);

// let newPerson = persons.map(person => person.age*2);
// console.log(newPerson);

//let newPerson = persons.filter(person => person.age > 15);
//console.log(newPerson);

// let newPerson = persons.map(person => person.name+"<-name");
// console.log(newPerson);

