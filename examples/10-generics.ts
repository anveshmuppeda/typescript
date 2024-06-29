class StorageContainer<T> {
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


}

const employeeNames = new StorageContainer<string>();
employeeNames.addItem("Anvesh");
employeeNames.addItem("Muppeda");
console.log("First Employee Name: " + employeeNames.getItem(0));
console.log("Second Employee Name: " + employeeNames.getItem(1));

const employeeSalarys = new StorageContainer<number>();
employeeSalarys.addItem(150000);
employeeSalarys.addItem(175000);
console.log("First Employee Salary: " + employeeSalarys.getItem(0));
console.log("Second Employee Salary: " + employeeSalarys.getItem(1));