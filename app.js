const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(first, second)
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is Awesome : ${first} ${second}`,
            { flag: 'a'}
        )
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, res) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(res)
//         })
//     })

// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()
