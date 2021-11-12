const { posts } = require('../models')

module.exports = {

    //** CREAR POSTS */
    async create(req, res) {

        await posts.create({
            title: req.body.title,
            body: req.body.body
        })
            .then(post => {

                res.json(post)
            })
            .catch(err => {
                res.statu(500).json(err)
            })
    },

    //** LISTAR POSTS */

    async allPosts(req, res) {

        await posts.findAll()
            .then(posts => {

                res.json(posts)
            })
            .catch(err => {

                res.statu(500).json(err)
            })
    },
    //** LISTAR POSTS POR ID */

    async byIdPost(req, res) {

        let post = await posts.findByPk(req.params.id);

        if (!post) {

            res.status(404).json({ message: 'Post no se encontrado' });

        } else {
            res.json(post)
           
        }
    },

    //** ACTUALIZAR POSTS*/

    async updatePost(req, res) {

        let post = await posts.findByPk(req.params.id);

        if (!post) {

            res.status(404).json({ message: 'Post no se encontrado' });

        } else {
            post.title = req.body.title,
                post.body = req.body.body

            post.save().then(post => {
                res.json(post)
            })
        }
    },


    //** ELIMINAR POSTS*/
    async deletePost(req, res) {
        let post = await posts.findByPk(req.params.id)

        if (!post) {
            res.status(404).json({ message: 'Post no se encontrado' });
        } else {
            post.destroy().then(post => {
                res.json({ message: 'El post ha sido eliminado'})
            })
        }
    }
}