var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/hmtl'})
            return res.end('404 Not found.')
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);