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
router.get('/', Controller.toListUsers);
router.post('/register', upload.single('image'), Controller.register);
router.post('/login', Controller.login);
router.get('/:id', Controller.byIdUser);
router.patch('/:id', auth, Polices.updateUser ,  Controller.updateUser);
router.delete('/:id', auth, Polices.deleteUser,  Controller.deleteUser);

module.exports = router;

