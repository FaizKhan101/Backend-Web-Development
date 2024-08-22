const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/currentime", (req, res, next) => {
  res.send(new Date().toISOString());
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/store-user" method="POST"><label for="username">Your Name</label><input type="text" name="username" id="username"/><button>Submit</button></form>'
  );
});

app.post("/store-user", (req, res, next) => {
  const username = req.body.username;
  const p = path.join(__dirname, "data", "store.json");

    const fileData = fs.readFileSync(p);
    const existingUser = JSON.parse(fileData);
    existingUser.push({ id: Math.random(), name: username });
    fs.writeFileSync(p, JSON.stringify(existingUser));
  res.send("<h1>User stored</h1>");
});

app.get("/users", (req, res, next) => {
    const p = path.join(__dirname, "data", "store.json")
    const fileData = fs.readFileSync(p)
    const users = JSON.parse(fileData)
    const userList = users.map(user => `<li>${user.name}</li>`).join('');
    res.send(`<ul>${userList}</ul>`)
})

app.listen(3000, () => console.log("Server start at port: 3000"));
