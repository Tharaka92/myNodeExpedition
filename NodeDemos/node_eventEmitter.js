var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('Listener1 Executed');
}

var listener2 = function listener2(){
    console.log('Listener2 Executed');
}

eventEmitter.addListener('connection',listener1);

eventEmitter.on('connection',listener2);

var eventCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventCount + " listener(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1 wont listen now');

eventEmitter.emit('connection');

eventCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventCount + " listener(s) listening to connection event");

console.log("Program Ended.");







