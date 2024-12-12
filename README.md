# Node.js Basics

## What is Node.js?
Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side. It is built on Google Chrome's V8 JavaScript engine and is designed to build scalable and high-performance network applications.

---

## Features of Node.js
- **Asynchronous and Event-Driven:** Node.js uses non-blocking I/O operations, making it suitable for scalable, real-time applications.
- **Fast Execution:** Built on the V8 engine, Node.js executes JavaScript code quickly.
- **Single-Threaded but Scalable:** Uses a single-threaded model with an event loop, allowing it to handle many requests efficiently.
- **NPM (Node Package Manager):** Provides access to a rich ecosystem of open-source libraries.
- **Cross-Platform:** Works on Windows, macOS, and Linux.

---

## Installing Node.js
1. Download the installer for your operating system from the [official Node.js website](https://nodejs.org/).
2. Run the installer and follow the instructions.
3. Verify installation by running:
   ```bash
   node -v
   npm -v
   ```

---

## Your First Node.js Application
1. Create Folder with name of your `app_name/project_name`.
    ```cmd
    mkdir <app_name>
    ```
2. Go to that directory `cd <app_name>`.
3. Initialize node and npm init by cmd `npm init -y`.
4. Create a file named `app.js`.
5. Add the following code:
   ```javascript
   // app.js
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!\n');
   });

   server.listen(`[PORT]`, () => {
     console.log('Server running at http://localhost:[PORT]/');
   });
   ```
6. Run the application:
   ```bash
   node app.js
   ```
7. Open your browser and navigate to `http://localhost:[PORT]` to see your app in action.

---

## Key Modules in Node.js
### 1. `http`
Used to create an HTTP server.
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(3000);
```

### 2. `fs`
Used for file system operations (reading, writing, deleting files, etc.).
```javascript
const fs = require('fs');
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File created!');
});
```

### 3. `path`
Provides utilities for working with file and directory paths.
```javascript
const path = require('path');
console.log(path.join(__dirname, 'file.txt'));
```

### 4. `os`
Provides information about the operating system.
```javascript
const os = require('os');
console.log(os.platform());
console.log(os.freemem());
```

### 5. `events`
Allows working with custom event emitters.
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
  console.log('An event occurred!');
});

emitter.emit('event');
```

---

## Working with NPM
NPM (Node Package Manager) is a tool for managing Node.js packages.

### Check NPM Version
```bash
npm -v
```

### Initialize a New Project
```bash
npm init -y
```
This creates a `package.json` file with default values.

### Install a Package
```bash
npm install express
```
This installs Express.js, a popular web framework.

### Uninstall a Package
```bash
npm uninstall express
```

### List Installed Packages
```bash
npm list
```

---

## Creating a Basic REST API with Express.js
1. Install Express:
   ```bash
   npm install express
   ```

2. Create `server.js`:
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Welcome to the REST API!');
   });

   app.listen(3000, () => {
     console.log('Server is running on http://localhost:3000');
   });
   ```

3. Run the server:
   ```bash
   node server.js
   ```

4. Access the API at `http://localhost:3000/`.

---

## Debugging in Node.js
1. Use `console.log()` for basic debugging.
2. Use the built-in Node.js debugger:
   ```bash
   node inspect app.js
   ```
3. Use third-party tools like `nodemon` for automatic restarts during development:
   ```bash
   npm install -g nodemon
   nodemon app.js
   ```

---

## Conclusion
Node.js is a powerful tool for building scalable, high-performance applications. With its vast ecosystem and active community, it enables developers to create everything from simple scripts to complex, enterprise-grade applications.

# todo-node-app
