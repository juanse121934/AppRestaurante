const User = require('./UserController');


module.exports = {
    register: User.register,
    login: User.login,
    toList: User.toList,
    
}

