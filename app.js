const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/currenttime') {
        res.statusCode = 200;
        const time = new Date().toISOString().
        res.write(`<h1>${time}</h1>`)
        
    }
})

server.listen(3000)