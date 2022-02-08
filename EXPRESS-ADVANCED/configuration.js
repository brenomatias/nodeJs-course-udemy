const config = require('conf');

console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));