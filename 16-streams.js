const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-file.txt')

stream.on('data', (chunk)=>{
    console.log(chunk)
}, {highWaterMark: 50000, encoding: 'utf8'})

// default 64 kb
// last buffer -remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big-file.txt',{highWaterMark: 9000})
// const stream = createReadStream('./content/big-file.txt',{encoding : 'utf8})

stream.on('error', (err)=>{
    console.log(err)
})