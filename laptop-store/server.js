const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to 2026 Laptop Store </h1> <p> hello </p>");
});

server.listen(3000, () => {
  console.log(`Sever is  running on http://localhost:3000`);
});
