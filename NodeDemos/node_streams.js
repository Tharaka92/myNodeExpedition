//Reading from stream
/*
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
*/

//Writing to stream

/*var fs = require("fs");
var data = 'Writeblablabla Writeblablabla Writeblablabla';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
*/

//Piping streams

/*var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");*/

// Chaining streams - compress

/*var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('file compressed');*/

// Chaining streams - decompress

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('file decompressed');