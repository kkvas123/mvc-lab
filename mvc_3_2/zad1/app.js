const http = require("http");
const PORT = 3000;

const renderPage = require("./student")
const renderPage1 = require("./home")

const server = http.createServer((request, response) => {
    const url = request.url;

    if (url === "/") { renderPage('home', response); }
    else if (url === "/student") { renderPage1('student', response); }
}

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});