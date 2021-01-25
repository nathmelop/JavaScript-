//EventEmitter 

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('user logged', data => {
    console.log(data);
});
emitter.emit('user logged', { user: 'nathalia melo' });