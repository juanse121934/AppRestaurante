//Importo express
const express = require(`express`);
const router = express.Router();
const Controller = require('../Controllers');


//** RUTAS DE USUARIOS */
router.get('/', Controller.home);

module.exports = router;
