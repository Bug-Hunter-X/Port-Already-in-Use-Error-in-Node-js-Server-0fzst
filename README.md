# Node.js Port Already in Use Error
This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a solution.

## Description
The `http.createServer` method creates a server that listens on a specified port. If that port is already occupied by another process, the server will fail to start, throwing an error.

## Solution
The solution involves checking if the port is available before attempting to start the server.  Error handling is implemented to gracefully manage the situation, providing informative feedback to the user.