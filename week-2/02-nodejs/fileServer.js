/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const { log } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

app.post('/files', (req, res) => {
  const { filename, content } = req.body;
  console.log(filename + " " + content);
  const written = fs.writeFileSync('./files/' + filename, content);
  console.log("reached here");
  return res.status(200)
});

app.get('/files', (req, res) => {
  const files = fs.readdirSync('./files');

  if (typeof (files) !== "object") {
    return res.status(500).send("Internal server error")
  }
  return res.status(200).json({
    files
  })
})

app.get('/file/:filename', (req, res) => {

  try {
    const { filename } = req.params;
    const files = fs.readdirSync('./files');
    if (!files.includes(filename)) {
      return res.status(404).send("File not found")
    }

    const data = fs.readFileSync(`./files/${filename}`, 'utf8');

    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send("internal server error")
  }
});



app.use('*', (req, res, next) => {
  return res.status(404).send("Route not found");
})

// Global catch
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: err.message
  })
})

// app.listen(3000 , ()=> {
//   console.log("Server is running on port 3000");
// })

module.exports = app;