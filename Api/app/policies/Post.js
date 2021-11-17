const { users } = require('../models')

module.exports = {
    
    //** POLITICAS PARA CREAR POSTS */
    async createPost(req, res, next) {

        //** COMPRUEBO SI EL USUARIO ES AUTOR DEL POST O EL USER ES ADMINISTRADOR */
        //**LAS POLITICAS SE AGREGAN EN LA RUTA DESPUES DE OPTENERE EL POST PARA DAR AUTORIZACION DE HACER ALGO */
        if (req.user.id) {
            next();
        } else {
            res.status(401).json({ mensage: 'Debes estar registrado o logueado para crear un post' });
        }
    },

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

    //** POLITICAS PARA ELIMINAR POSTS */
    async deletePost(req, res, next) {

        if (req.use.id === req.post.userId || users.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ mensage: 'No tienes autorizaciones' });
        }
    }
}