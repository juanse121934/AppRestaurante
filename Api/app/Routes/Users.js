//Importo express
const express = require(`express`);
const router = express.Router();
const Controller = require('../Controllers');

//** MIDDLEWARES PARA COMPROBACION DE TOKEN*/
const auth = require('../Middlewares/Auth')

//** POLITICAS  */
const Polices = require('../policies')

//Importo el metodo para el manejo de imagenes
const upload = require('../../libs/storage');



//** RUTAS DE USUARIOS */
router.post('/register', upload.single('image'), Controller.register);
router.post('/login', Controller.login);
router.get('/', Controller.toListAll);
router.get('/:id', Controller.byIdUser);
router.get('/:id/posts', Controller.byUserPosts);
router.get('/:id/platos', Controller.byUserPlatos);
router.get('/:id/postres', Controller.byUserPostres);
router.patch('/:id',   Controller.updateUser);
// router.delete('/:id',  Controller.deleteUser);

module.exports = router;
