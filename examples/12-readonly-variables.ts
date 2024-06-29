interface EmployeeReadOnly {
    readonly employeeId: number;
    readonly startDate: Date;
    name: string;
    role: string;
}

const employee: EmployeeReadOnly = {
    employeeId: 5,
    startDate: new Date(),
    name: "Anvesh Muppeda",
    role: "DevOps Engineer",
};

employee.name = "Muppeda Anvesh"; // We can change this value since it is not a readonly variable

// employee.employeeId = 6; // This value we cannot change since it is read only

console.log(employee);
