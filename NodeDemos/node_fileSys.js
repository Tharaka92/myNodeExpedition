
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

// Reading a file

/*var fs = require('fs');
var buf = new Buffer(1024);

console.log('Going to open an existing file');

fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        console.log(err);
    }
    console.log('File Opened Successfully');
    console.log('Truncate starting....');

    fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("File truncated successfully.");
      console.log('Going to read the file');
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
          console.log(err);
       }
       console.log(bytes + " bytes read");
      // Print only read bytes to avoid junk.
       if(bytes > 0){
          console.log(buf.slice(0, bytes).toString());
       }

        fs.close(fd, function(err){
          if(err){
             console.log(err);
          }
          console.log('File closed successfully');

          fs.unlink('input.txt',function(err){
              if(err){
                  return console.log(err);
              }
              console.log("File deleted successfully!");
          });

        });
      });
    });
});*/

// Create Directory
var fs = require('fs');
console.log("Going to create directory /tmp/test");
fs.mkdir('tmp/test',function(err){
    if(err){
        return console.log(err);
    }
    console.log("Directory created successfully!");
});



























