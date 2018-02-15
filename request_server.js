var http = require('http');
var url = require('url');
var uc = require('upper-case');

http.createServer(function (req, res) {
    if(req.method === 'GET'){
        if(uc(req.url) === '/ PEOPLE'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('This is the people page.')
            return res.end();
        }

        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('404 not found');     
    }

    if(req.method === 'POST'){

    }
    
}).listen(8080);