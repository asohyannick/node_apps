const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
// Template string
// ES6  ES2015 : ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`free Memory: ${freeMemory}`);