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
1. Create a file named `app.js`.
2. Add the following code:
   ```javascript
   // app.js
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!\n');
   });

   server.listen(3000, () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```
3. Run the application:
   ```bash
   node app.js
   ```
4. Open your browser and navigate to `http://localhost:3000` to see your app in action.

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

## Creating a Todo App with Express.js

### Step 1: Setup
1. Initialize a new project and install required dependencies:
   ```bash
   npm init -y
   npm install express body-parser
   ```

2. Create a file named `todoApp.js`.

### Step 2: Basic Todo App Code
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todos = []; // In-memory storage for todos

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (task) {
    const newTodo = { id: Date.now(), task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({ error: 'Task is required' });
  }
});

// Update a todo's completion status
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));

  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = todos.length;
  todos = todos.filter(t => t.id !== parseInt(id));

  if (todos.length < initialLength) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000, () => {
  console.log('Todo app is running on http://localhost:3000');
});
```

### Step 3: Testing the API
- Use tools like [Postman](https://www.postman.com/) or `curl` to test the API endpoints:
  - **GET /todos**: Fetch all todos.
  - **POST /todos**: Add a new todo by sending a JSON body: `{ "task": "Learn Node.js" }`.
  - **PUT /todos/:id**: Toggle completion status of a todo.
  - **DELETE /todos/:id**: Delete a specific todo by ID.

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

