const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-promises.txt', `This is SUPER !!  ${first} ${second}`, {flag: 'a'})
    } catch (error) {
        console.log(error)
    }
}
start()


// const getText = path => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// // getText('./content/first.txt').then((data) => console.log(data)).catch((err) => console.log(err))

// const start = async()=> {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first,second)
//     } catch (error) {
//         console.log(first)
//     }
    
// }

// start()
