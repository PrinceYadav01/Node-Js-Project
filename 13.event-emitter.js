const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`Data recieved User: ${name} with ID: ${id}`)
})

const fire = () => {
    console.log('Response is fired')
}

customEmitter.on('response', fire)

customEmitter.emit('response', 'User1', 001)

// on() -> listen to an event
// emit() -> emit an event 
 