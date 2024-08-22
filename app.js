const express = require("express")

const app = express()

app.get("/currentime", (req, res, next) => {
    res.send(new Date().toISOString())
})

app.use((req, res, next) => {
    res.status(200).send("<h1>Hello World</h1>")
})

app.listen(3000, () => console.log("Server start at port: 3000"))