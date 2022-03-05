const http = require('http')
const port = process.env.PORT || 3000

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, { 'Content-Type': contentType })
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            // res.writeHead(200, { 'Content-Type': 'text/plain' })
            // res.end('Homepage')
            serveStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/about':
            // res.writeHead(200, { 'Content-Type': 'text/plain' })
            // res.end('About')
            serveStaticFile(res, '/public/about.html', 'text/html')
            break
        case '/img/logo.png':
            // res.writeHead(200, { 'Content-Type': 'text/plain' })
            // res.end('About')
            serveStaticFile(res, '/public/img/logo.png', 'image/png')
            break
        default:
            // res.writeHead(400, { 'Content-Type': 'text/plain' })
            // res.end('Not Found')
            serveStaticFile(res, '/public/404.html', 'text/html', 404)
            break
    }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + `press Ctrl-C tp terminate...` ))