const http = require("http");
const port = 3000;

http.createServer((req, res) => {

    res.writeHead(200, {"content-type":"application/json"});
    res.end("Hurey working!");

}).listen(port);

console.log(`Server started on port ${port}`);