// Read more here: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

const { createServer } = require('node:http');
// Alternative, used for ECMAScript modules
// (don't need to worry too much about this for now):
//import { createServer } from 'node:http';

// This the IP address for the machine that you are working off of.
// Often referred to as "localhost"
const hostname = '127.0.0.1';

// The port that the server is listening to.
// To access from the browser: "http://localhost:3000"
const port = 3000;

const server = createServer((req, res) => {
  // This is what the server will send back when you send a request.
  // Status "200" means that everything is going as expected.
  // "4xx" means user error and "5xx" means server error.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to NCSU DiamondHacks 2024');
});

// The previous section created a server.
// This part actually runs it on the host and port defined above.
server.listen(port, hostname, () => {
  // This prints only in the terminal, so that we can see and use to debug.
  console.log(`Server running at http://${hostname}:${port}/`);
});