const EventEmitter = require('events');
const emitter = new EventEmitter();
// REgister a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

const Logger = require('./emitter');
const looger = new Logger();

logger.log('message');

// function sayHello(name) {
//  console.log('Hello' + name);
// }
// sayHello('Yannick');

// const log = require('./logger');