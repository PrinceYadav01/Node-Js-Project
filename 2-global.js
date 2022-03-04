// GLOBALS -- NO WINDOW !!!
// __dirname  - path to current directory.
// __filename - file name
// require    - function to use module (file)
// module     - info about current module (file)
// process    - info about env where the program is being executed.

setTimeout(async()=>{
    console.log(__dirname);
}, 1000)

setInterval(()=>{
    console.log(__filename);
},1000)
