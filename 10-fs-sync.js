const {readFileSync, writeFileSync } = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


// By default overrites else can flag object If want to append
writeFileSync('./content/result.txt',
`Here is the result : ${first}, ${second}`,
{flag: 'a'});

console.log('done with the task.');
console.log('Starting the next one');