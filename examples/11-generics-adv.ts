class MyStorageContainer<T> {
    private contents: T[];

    constructor() {
         this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }

    removeItem(idx: number): T | undefined {
        if (idx < 0 || idx >= this.contents.length) {
            return undefined; // Index out of bounds
        }
        return this.contents.splice(idx, 1)[0]; // Remove item at index and return it
    }
}

// Usage example
const employeesNames = new MyStorageContainer<string>();
employeesNames.addItem("Anvesh");
employeesNames.addItem("Muppeda");

console.log("First Employee Name: " + employeesNames.getItem(0));   // Output: First Employee Name: Anvesh
console.log("Second Employee Name: " + employeesNames.getItem(1));  // Output: Second Employee Name: Muppeda

employeesNames.removeItem(0); // Remove the first employee name

console.log("First Employee Name after removal: " + employeesNames.getItem(0));  // Output: First Employee Name after removal: Muppeda

const employeesSalarys = new MyStorageContainer<number>();
employeesSalarys.addItem(150000);
employeesSalarys.addItem(175000);

console.log("First Employee Salary: " + employeesSalarys.getItem(0));   // Output: First Employee Salary: 150000
console.log("Second Employee Salary: " + employeesSalarys.getItem(1));  // Output: Second Employee Salary: 175000

employeesSalarys.removeItem(1); // Remove the second employee salary

console.log("Second Employee Salary after removal: " + employeesSalarys.getItem(1));  // Output: Second Employee Salary after removal: undefined
