//console.log( "this file name : " + __filename );
//console.log( "this directory name : " + __dirname );

function hello(){
    console.log("Hello Tharaka!");
}

//var result = setTimeout(hello, 2000);
//clearTimeout(result);

var result = setInterval(hello,2000);
clearInterval(result);
