//Importo express
const express = require(`express`);
const router = express.Router();
const Controller = require('../Controllers');

//Importo el metodo para el manejo de imagenes
const upload = require('../../libs/storage');



// Creo las rutas
//** RUTAS DE USUARIOS */
router.post('/login', Controller.login);
router.post('/register', upload.single('image'), Controller.register);





module.exports = router;