var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs  = require('fs');

var app = express();

app.use(express.static('public'));

var upload = multer({ dest: '/tmp/' })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "test.html" );
})

app.get('/process', function(req, res) {   
   response = {
       firstName : req.query.firstName,
       lastName : req.query.lastName,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/processPOST', urlencodedParser,function(req, res) {   
   response = {
       firstName : req.body.firstName,
       lastName : req.body.lastName,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/file_upload', upload.single('buwahaha'), function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});

