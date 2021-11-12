//Importo express
const express = require(`express`);
const router = express.Router();
const Controller = require('../Controllers');

//** MIDDLEWARES */
const auth = require('../Middlewares/Auth')

//Importo el metodo para el manejo de imagenes
const upload = require('../../libs/storage');



// Creo las rutas
//** RUTA HOME */
router.get('/', Controller.home);

//** RUTAS DE USUARIOS */
router.post('/register', upload.single('image'), Controller.register);
router.post('/login', Controller.login);
router.get('/users', Controller.toListUsers);

//** RUTAS POSTS */
router.post('/posts', Controller.createPosts);
router.get('/posts', auth, Controller.toListPosts);
router.get('/posts/:id', auth, Controller.byIdPost);
router.patch('/posts/:id', auth, Controller.updatePost);
router.delete('/posts/:id', auth, Controller.deletePost);





module.exports = router;