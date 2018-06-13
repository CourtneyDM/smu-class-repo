var http = require("http");
var PORT = 8080;

//generic function to handle requests

function handleRequest(request, response){
    response.end("It works!!! BOOYAH!!!: " + request.url);
}

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});