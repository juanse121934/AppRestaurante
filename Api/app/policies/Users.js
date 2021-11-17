const { users } = require('../models')

module.exports = {

   
    //** POLITICAS PARA ACTUALIZAR USERS */
    async updateUser(req, res, next) {

        //** COMPRUEBO SI EL USUARIO ES AUTOR DEL POST O EL USER ES ADMINISTRADOR */
        //**LAS POLITICAS SE AGREGAN EN LA RUTA DESPUES DE OPTENERE EL POST PARA DAR AUTORIZACION DE HACER ALGO */
        if (req.user.id === req.user.id || users.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ mensage: 'No tienes autorizaciones' });
        }
    },

    //** POLITICAS PARA ELIMINAR POSTS */
    async deleteUser(req, res, next) {

        if (req.use.id === req.user.id || users.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ mensage: 'No tienes autorizaciones' });
        }
    }
}