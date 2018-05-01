
var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "static/";
var MongoClient = require('mongodb').MongoClient;
var db,menu;
var dbURL="mongodb://pizza1:pizza1@localhost:27017/pizzadb"
var server=http.createServer(function (req, res) {
 var urlObj = url.parse(req.url, true, false);
 console.log(urlObj.pathname)
 if(req.method=="GET")
 {
  if (urlObj.pathname=="/menu")
  {
    var query='name:"Chicken"'
    findMenuItems(res, query)
  }
  else
  {
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end("<h1>Page does not exist!</h1>");
        return;
      }
      res.writeHead(200);
      res.end(data);
    })
  }
}
})

// Initialize connection once
MongoClient.connect(dbURL, 
 function(err, database) {
  if(err) throw err;

  db=database.db("pizzadb")
  
  // Start the application after the database connection is ready
  server.listen(8000);
  console.log("Listening on port 8000");
});

//function to Get menuItems from DB 
function findMenuItems(res, query)
{
  db.collection("menu").find({query}).toArray(function(err, results){
    console.log(results)
    res.writeHead(200);
    res.end(JSON.stringify(results))
  })
}
// if the request path is menu, show the results on web server, and send ok back
