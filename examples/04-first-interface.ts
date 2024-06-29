// This program is for first Interface in TypeScript  

interface UserInterface {
    id: number;
    name: string;
    age: number;
}
const UserDetails: UserInterface = {
    id: 5,
    name: "Anvesh",
    age: 25,
};

console.log("User ID: ", UserDetails.id)
console.log("User Name: ", UserDetails.name)
console.log("User Age: ", UserDetails.age)