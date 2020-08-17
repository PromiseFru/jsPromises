const http = require("http");
const fs = require('fs')
const port = 3000;

http.createServer((req, res) => {

    res.writeHead(200, {"content-type":"application/json"});
    
    res.end("Hurey working!");

}).listen(port);

console.log(`Server started on port ${port}`);

fs.readFile('./data.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err)
      return
    }
    try {
       const data = JSON.parse(fileContents)
       console.log(data);
    } catch(err) {
      console.error(err)
    }
  })