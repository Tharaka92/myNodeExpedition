var os = require("os");
var path = require("path")
var dns = require('dns')

//OS utility
/*console.log('+++++++++ OS utility ++++++++');
console.log('Temp directory : '+ os.tmpdir());
console.log('CPU endianness : '+ os.endianness());
console.log('OS hostname : '+ os.hostname());
console.log('OS type : '+ os.type());
console.log('OS platform : '+ os.platform());
console.log('OS architecture : '+ os.arch());
console.log('OS release : '+ os.release());
console.log('OS uptime (seconds) : '+ os.uptime());
console.log('OS load average : '+ os.loadavg());
console.log('Total memory (bytes) : '+ os.totalmem());
console.log('Free memory available (bytes) : '+ os.freemem());
console.log('CPU core details : '+ JSON.stringify(os.cpus()));
console.log('Network interfaces : '+ os.networkInterfaces());*/

//Path utility for handling and transforming file paths
/*console.log('+++++++++ Path utility ++++++++');
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
console.log('resolve : ' + path.resolve('main.js'));
console.log('ext name : ' + path.extname('main.js'));*/

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address : ', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }
      console.log('reverse for ' + address + ' : ' + JSON.stringify(hostnames));
   });  
});
