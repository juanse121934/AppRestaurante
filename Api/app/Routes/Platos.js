// /Importo express
// const express = require(`express`);
// const router = express.Router();
// const Controller = require('../Controllers');

// //** MIDDLEWARES PARA COMPROBACION DE TOKEN*/
// const auth = require('../Middlewares/Auth')

// //** POLITICAS  */
// const Polices = require('../policies')

// //Importo el metodo para el manejo de imagenes
// const upload = require('../../libs/storage');



// // Creo las rutas
// //** RUTA HOME */
// router.get('/', Controller.home);

// //** RUTAS DE USUARIOS */
// router.post('/register', upload.single('image'), Controller.register);
// router.post('/login', Controller.login);
// router.get('/users', Controller.toListUsers);
// router.get('/users/:id', Controller.byIdUser);

// //** RUTAS POSTS */
// router.post('/posts', auth, Polices.createPost, Controller.createPosts);
// router.get('/posts', Controller.toListPosts);
// router.get('/posts/:id', Controller.byIdPost);
// router.patch('/posts/:id', auth, Controller.findPost, Polices.postUpdate, Controller.updatePost);
// router.delete('/posts/:id', auth, Controller.findPost, Polices.deletePost, Controller.deletePost);

module.exports = router;
