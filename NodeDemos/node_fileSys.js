
// sync vs async file read

/*var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");*/

// get file or dir info
/*var fs = require('fs');

console.log('getting file info....');
fs.stat('input.txt', function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});*/

//writting to a file
/*var fs = require('fs');

console.log("Going to write into existing file");
fs.writeFile('input.txt','new content from script', function(err){
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('input.txt',function(err,data){
        if(err){
        return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});*/





















