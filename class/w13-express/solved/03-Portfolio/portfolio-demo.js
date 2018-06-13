var http = require("http");
var PORT = 8080;
var server = http.createServer(handlerRequest);

server.listen(PORT, function(){
    console.log("Listening on localhost");
});

function handlerRequest(req, res){
    var path = req.url;
    console.log(path);

    switch(path){
        //routing

        case "/":
            return displayRoot(path, req, res);
            break;
        
        case "/portfolio":
            return displayPortfolio(path, req, res);
            break;

        default:
            return display404(path, req, res);
            break;
    }
}

function displayRoot(url, req, res){
    var myHTML = "<html><body><h1>This is the home page</h1><a href='/portfolio'>Portfolio</a></body></html>";
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(myHTML);
}

function displayPortfolio(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>My Portfolio</h1>" +
      "<a href='/'>Go Home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

  function display404(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
  