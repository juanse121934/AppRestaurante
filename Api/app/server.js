
//Importo la funcion app
const app = require('./App');


//Importo la conexion a la base de datos
const {  sequelize } = require('./models/index');


// Importo los parametros del archivo .env
const PORT = process.env.PORT || 4001;


app.listen(PORT, () => {

  //Informo dode esta corriendo el localhost
  console.log(`La App esta corriendo en el puerto: http://localhost:${PORT}/api`);

  sequelize.authenticate().then(() => {
    console.log('Estoy conectado a la base de datos')
    })
    .catch(err => {
    console.log(err);
  })

  // sequelize.sync({ force: false })
  //   .then(() => {
  //     console.log('Estoy conectado a la base de datos');
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   });

});
