const EventEmitter =  require('events');
const emitter = new EventEmitter();

emitter.on('message', (arg) => {
console.log('Listener called', arg);
});

// Raise an event 
emitter.emit('messageLogged', {id:1, url:'http://'});

// Raise: Logging (date:message);
