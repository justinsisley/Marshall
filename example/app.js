var config = require('./config');

console.log(config.get('env') + '\n');
console.log(config.get());
console.log(config.doc());