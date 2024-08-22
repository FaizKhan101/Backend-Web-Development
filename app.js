const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/currentime", (req, res, next) => {
    res.send(new Date().toISOString())
})

app.get("/", (req, res, next) => {
    res.send('<form action="/store-user" method="POST"><label for="username">Your Name</label><input type="text" name="username" id="username"/><button>Submit</button></form>')
})

app.post('/store-user', (req, res, next) => {
    console.log(req.body.username);
    res.send("<h1>User stored</h1>")
})

app.listen(3000, () => console.log("Server start at port: 3000"))