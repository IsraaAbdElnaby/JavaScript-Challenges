//PRIVATE ENTITIES
const username = Symbol("username");
const password = Symbol("password");

const john = {
    [username]: "John Doe",
    [password]: "123456",
    age: 25
}

console.log(john.username);
console.log(john.age);
