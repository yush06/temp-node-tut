const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to home");
    return;
  }
  if (req.url === "/about") {
    res.end("welcome to about");
    return;
  }
  res.end(`<h1>Wrong detials</h1>`);
});

server.listen(5000);
