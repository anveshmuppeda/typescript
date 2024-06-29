// This program is an example and basic usage of Enum in TS  

enum StudentGrade {
    Excellent = "excellent",
    Good = "good",
    Average = "average",
    Poor = "poor",
}

const printStudentGrade = (marks: StudentGrade) => {
    if (marks == StudentGrade.Excellent){
        console.log("Student grade: A+ Excellent");
    } else if (marks == StudentGrade.Good) {
        console.log("Student grade: A Good");
    } else if (marks == StudentGrade.Average) {
        console.log("Student grade: B+ Average");
    } else {
        console.log("Student grade: B Poor");
    }
};

printStudentGrade(StudentGrade.Excellent);
printStudentGrade(StudentGrade.Poor);