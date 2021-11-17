const { posts } = require('../models')
const { users } = require('../models')

module.exports = {


    //** CREAR POSTS */
    async create(req, res) {

        await posts.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.body.userId
        })
            .then(post => {res.json(post) })
            .catch(err => { res.status(500).json(err)})
    },

    //** LISTAR POSTS */

    async allPosts(req, res) {

        await posts.findAll()
            .then(posts => {res.json(posts)})
            .catch(err => {res.statu(500).json(err)})
    },

    //** LISTAR POSTS POR ID */
    async byIdPost(req, res) {

        await posts.findByPk(req.params.id)
            .then(post => { res.json(post) })
            .catch(error => {res.json(error)});
        
    },

    //** LISTAR POSTS POR ID Y AUTOR*/
    async byIdAutor(req, res) {
        await posts.findByPk(req.params.id)
            .then(post => {
                post.getAutor({
                    attributes: [`id`, 'username', 'email']
                })
                    .then(autor => {res.json({ post, autor })})
            })
            .catch(error => {res.statu(500).json(error)});
    },

    //** ACTUALIZAR POSTS*/

    async updatePost(req, res) {

        await posts.update({
            title: req.body.title,
            body: req.body.body,
        }, {
            where: { id: req.params.id, }
        })
            .then(result => {
                res.json({result,mensage:'Posts Actualizado'})
        })

    },


    //** ELIMINAR POSTS*/
    async deletePost(req, res) {

        await posts.destroy({
            where: { id: req.params.id},
        })
            .then(result => {
            res.json({result,mensage:'Posts eliminado'})
        })
    }
}




// const { posts } = require('../models')
// const {users} = require('../models')

// module.exports = {

//     //**RUTA EXCLUSIVA PARA BUSCAR EL POST POR ID Y DAR PASO A LAS SIGUIENTES FUNCIONES */
//     //** ESTA FUNCION SE AGREGA ANTES DE HACER ALGUNA ACCION EN LA DB */
//     async findPost(req, res, next) {
//         let post = await posts.findByPk(req.params.id);

//         if (!post) {

//             res.status(404).json({ message: 'Post no se encontrado' });

//         } else {
//             req.post = post;
//             next();

//         }
//     },

//     //** CREAR POSTS */
//     async create(req, res) {

//         await posts.create({
//             title: req.body.title,
//             body: req.body.body,
//             userId: req.user.id,
//         })
//             .then(post => {

//                 res.json(post)
//             })
//             .catch(err => {
//                 res.statu(500).json(err)
//             })
//     },

//     //** LISTAR POSTS */

//     async allPosts(req, res) {

//         await posts.findAll({
//             include: [{
//                 model: users,
//                 as: 'autor',
//                 attributes: ['id','username','email']
//             }]
//         })
//             .then(posts => {

//                 res.json(posts)
//             })
//             .catch(err => {

//                 res.statu(500).json(err)
//             })
//     },
//     //** LISTAR POSTS POR ID */

//     async byIdPost(req, res) {

//         let post = await posts.findByPk(req.params.id);

//         if (!post) {

//             res.status(404).json({ message: 'Post no se encontrado' });

//         } else {
//             res.json(post)

//         }
//     },

//     //** ACTUALIZAR POSTS*/

//     async updatePost(req, res) {

//             req.post.title = req.body.title,
//             req.post.body = req.body.body

//             req.post.save().then(post => {
//                 res.json(post)
//             })

//     },


//     //** ELIMINAR POSTS*/
//     async deletePost(req, res) {

//             req.post.destroy().then(post => {
//                 res.json({ message: 'El post ha sido eliminado'})
//             })

//     }
// }