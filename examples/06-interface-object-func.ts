// This program is for Interface example in TypeScript to explain func within object  

interface StudentInterface {
    id: number;
    name: string;
    age?: number; // This is optional
    performance(message: string): void; // Return type is void, since we are not returning anything.
}
const Student: StudentInterface = {
    id: 5,
    name: "Anvesh",
    age: 12,
    performance(message) {
        console.log("Student Performance: ", message);
    }
};

Student.performance("Good");
Student.performance("Average");
