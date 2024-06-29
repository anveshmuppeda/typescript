interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UsesrIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UsesrIdentity; // Here we are using & but not | . Since Employee is combination of both.

const signContract = (employee: Employee): void => {
    console.log(
        "Thanks for the Contract " + employee.name + ". Complete details will sent to email: " + employee.email
    );
};

signContract({
    name: "Anvesh",
    creditScore: 750,
    id: 5,
    email: "anvesh@gmail.com",
})