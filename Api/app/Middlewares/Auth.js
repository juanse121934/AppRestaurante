const jwt = require('jsonwebtoken');
const auth = require('../../config/auth')
const {users} = require('../models')

module.exports = (req, res, next) => {
    
   
    if (!req.headers.authorization) {
        res.status(401).json({ mensage: 'Acceso no autorizado' });
    } else {
        
        //** COMPROBAMOS LA VALIDEZ DEL TOKEN */
        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, auth.secret, (err, decoded) => {
            if (err) {

                //** SI EL TOKEN ES INVALIDO */
                res.status(500).json({ mensage: 'Ha ocurrido un problema con el token', err });
            } else {
                //** SI EL TOKEN ES VALIDO FILTRO EL USUARIO */
                users.findByPk(decoded.user.id, { include: 'roles' }).then(user => {
                    
                    req.user = user;
                    next();
                })
            }
        })

    }
}