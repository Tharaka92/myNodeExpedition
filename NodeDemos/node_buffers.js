/*buf = new Buffer(256);
len = buf.write("Im Tharaka Herath");

console. log('octets written : ' + len);
*/

/*buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii')); 
console.log( buf.toString('ascii',0,5));   
console.log( buf.toString('utf8',0,5));    
console.log( buf.toString(undefined,0,5));*/

/*var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);
*/

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());

















