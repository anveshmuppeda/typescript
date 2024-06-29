// This program is for Interface example in TypeScript to check the optional variables  

interface EmployeeInterface {
    id: number;
    name: string;
    age?: number; // This is optional
}
const Employee: EmployeeInterface = {
    id: 5,
    name: "Anvesh",
};

if (!Employee.age){
    console.log("No Age defined for the Employee");
}
else{
    console.log("Age for the Employee: ", Employee.age);
}
