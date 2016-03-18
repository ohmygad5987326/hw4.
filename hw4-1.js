var http  = require('http');
http.createServer(function(red,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Cool Boy~'\n);
}).listen(1337, '127.0.0.1');
