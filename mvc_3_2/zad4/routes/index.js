const home = require('.view/home');
const student = require('.view/student');

const handleHome = (request, response) => {
    res.writeHead({ 'Content-Type': 'text/html' });
    res.end(home());
};

const handleStudent = (request, response) => {
    response.writeHead({ 'Content-Type': 'text/html' });
    response.end(student());
};