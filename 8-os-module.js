const os = require('os');

// info about current User
const user = os.userInfo();
console.log(user);

// method returns the system utime in seconds.
console.log(`The system up time for ${os.uptime()} secons`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs);
