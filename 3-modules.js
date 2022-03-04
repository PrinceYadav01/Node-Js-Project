// CommonJS, every file is module (module)
// Module - Encapsulated Code (only share minimum)

// can name whatever you want
const names = require('./4-names'); 
const sayHi = require('./5-utils');
const data  = require('./6-alternative-flavour');

// Runs complete module
require('./7-mind-grenade');

console.log(data)

sayHi('Manish')
sayHi(data.singlePerson.name);
sayHi(names.arun)
sayHi(names.sahil)