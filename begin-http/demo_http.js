var http = require('http');

//create a server object:
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});//header to display response as html; 200 - status code; 'Con...' - response header
	res.write('Hello World!'); //write a response to the cliente
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080