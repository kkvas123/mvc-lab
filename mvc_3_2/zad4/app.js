const http = require("http");
const PORT = 3000;
const renderPage = require("./student")
const renderPage1 = require("./home")

const server = http.createServer((request, response) => {
    const url = request.url;

    if (url === "/") { renderPage1('home', response); }
    else if (url === "/student") { renderPage('student', response); }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
    }
}

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});