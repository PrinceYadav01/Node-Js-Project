// npm --version

// local depen
// npm i <packageName>

// npm install -g <packageName>
// global dependency
// sudo nano npm i -g <packageName>


// npm init
// Create package.json ( Initialize Package)
// npm init -y 
// Create package with default params

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);