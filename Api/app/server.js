//Importo express
const express = require(`express`);
const cors = require('cors')

//Importo morgan
const morgan = require(`morgan`);


//Importo la conexion a la base de datos
const {  sequelize } = require('./models/index');


const app = express();


//Milddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(`dev`));
app.use(cors())

// Importo los parametros del archivo .env
const PORT = process.env.PORT || 4001;

//Manejo de la ruta de las imagenes
app.use('/public', express.static(__dirname + '/../storage/imgs/'))

// Rutas 
app.use('/', require('./Routes/Routes'))


app.listen(PORT, () => {

  //Informo dode esta corriendo el localhost
  console.log(`La App esta corriendo en el puerto: http://localhost:${PORT}`);

  sequelize.authenticate().then(() => {
    console.log('Estoy conectado a la base de datos')
    })
    .catch(err => {
    console.log(err);
  })

});
