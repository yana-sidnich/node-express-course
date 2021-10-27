// console.log("Express Tutorial");

const https = require("http");
const server = https.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>hello page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>contact page</h1>");
    res.end();
  } else {
    res.writeHead(400, { "conten-type": "text/html" });
    res.write("<h1>not found page</h1>");
  }
});

server.listen(5000);
