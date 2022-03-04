const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcome to homepage');
    }
    if (req.url === '/about'){
        res.end('About us page');
    }
    
    res.end(`
    <h1> Page doesn't exist </h1>
    <a href="/"> Go to home page </a>
    `);
});

server.listen(5000);