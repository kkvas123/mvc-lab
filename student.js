const FULLNAME = "Katarzyna Kwasiborska";
const STUDENT_ID = "49036";

console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);

const getStudentFullName = (id) => {
    return students[id] ? students[id].fullName : "Micha³ Wiœniewski";
};

const getStudentId = (id) => {
    return students[id] ? students[id].studentId : "333444";
};
module.exports = { getStudentFullName, getStudentId };

const students = {
    0: { fullName: "Your Name", studentId: "Your Student ID" },
    1: { fullName: "Kacper Nowak", studentId: "111222" },
    2: { fullName: "Maja Kowalska", studentId: "222333" }
};



