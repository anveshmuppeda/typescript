
// This program is to create new variable type by union of two different types

type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log("My ID: " + id);
}

printID(5);
printID("Five");
