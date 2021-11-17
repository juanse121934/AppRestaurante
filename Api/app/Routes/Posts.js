//Importo express
const express = require(`express`);
const router = express.Router();
const Controller = require('../Controllers');

//** MIDDLEWARES PARA COMPROBACION DE TOKEN*/
const auth = require('../Middlewares/Auth')

//** POLITICAS  */
const Polices = require('../policies')


//** RUTAS POSTS */
router.post('/',  Controller.createPosts);
router.get('/', Controller.toListPosts);
router.get('/:id', Controller.byIdPost);
router.get('/:id/autor', Controller.byIdAutor);
router.patch('/:id',  Controller.updatePost);
router.delete('/:id', Controller.deletePost);


// //** RUTAS POSTS */
// router.post('/', auth, Polices.createPost, Controller.createPosts);
// router.get('/', Controller.toListPosts);
// router.get('/posts/:id', Controller.byIdPost);
// router.patch('/posts/:id', auth, Controller.findPost, Polices.postUpdate, Controller.updatePost);
// router.delete('/posts/:id', auth, Controller.findPost, Polices.deletePost, Controller.deletePost);

module.exports = router;
