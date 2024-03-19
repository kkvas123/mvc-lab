
const FULLNAME = "Katarzyna Kwasiborska";
const STUDENT_ID = "49036";

console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);

const student = require('./student');


const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`My name is ${student.getStudentFullName(0)}. My student ID is ${student.getStudentId(0)}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${ FULLNAME }. Mystudent ID is ${ STUDENT_ID }`)
});

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About student</title>
        </head>
        <body>
            <p>My name is${FULLNAME}. Mystudent ID is ${STUDENT_ID} </p>
        </body>
        </html>
    `);
};
