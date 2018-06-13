var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handlerRequestOne(request, response){
    response.end("You are awesome!");
}

function handlerRequestTwo(request, response){
    response.end ("You are NOT awesome :-( also you smell.");
}

var serverOne = http.createServer(handlerRequestOne);
var serverTwo = http.createServer(handlerRequestTwo);

serverOne.listen(PORTONE, function(){
    console.log("Server 1 is listening: " + PORTONE);
});

serverTwo.listen(PORTTWO, function(){
    console.log("Server 2 is listening: " + PORTTWO);
});