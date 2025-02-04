const http = require('http');
const net = require('net');

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const tester = net.createServer().once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(false);
      }
    }).once('listening', () => {
      tester.close();
      resolve(true);
    }).listen(port);
  });
}

async function startServer(port) {
  const portAvailable = await isPortAvailable(port);
  if (portAvailable) {
    const requestListener = (request, response) => {
      response.writeHead(200);
      response.end('Hello, World!');
    };

    const server = http.createServer(requestListener);
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
}

const port = 8080; //Change port as needed
startServer(port);