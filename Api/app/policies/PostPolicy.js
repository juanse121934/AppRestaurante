const { users } = require('../models')

module.exports = {

    //** POLITICAS PARA ACTUALIZAR POSTS */
    async updatePost(req, res, next) {

        //** COMPRUEBO SI EL USUARIO ES AUTOR DEL POST O EL USER ES ADMINISTRADOR */
        //**LAS POLITICAS SE AGREGAN EN LA RUTA DESPUES DE OPTENERE EL POST PARA DAR AUTORIZACION DE HACER ALGO */
        if (req.user.id === req.post.userId || users.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ mensage: 'No tienes autorizaciones' });
        }
    },

    async deletePost(req, res, next) {

        if (req.use.id === req.post.userId || users.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ mensage: 'No tienes autorizaciones' });
        }
    }
}