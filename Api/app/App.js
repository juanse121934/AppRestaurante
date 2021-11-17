//Importo express
const express = require(`express`);
const cors = require('cors')

//Importo morgan
const morgan = require(`morgan`);


const Routes = require(`./Routes/Routes`)


const app = express();


//Milddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(`dev`));
app.use(cors())


//Manejo de la ruta de las imagenes
app.use('/public', express.static(__dirname + '/../storage/imgs/'))

// Rutas 
app.use('/', Routes );



module.exports = app;