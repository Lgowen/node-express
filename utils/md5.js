 // md5
 const crypto = require('crypto')

 const createMD5Password = function (password) {
       return crypto.createHash('md5').update(password).digest('hex')
 }

 module.exports = createMD5Password