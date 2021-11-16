//Importo express
const express = require(`express`);
const cors = require('cors')

//Importo morgan
const morgan = require(`morgan`);

const HomeRouter = require(`./Routes/Home`);
const UsersRouter = require(`./Routes/Users`);
const PostsRouter = require(`./Routes/Posts`);


const app = express();


//Milddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(`dev`));
app.use(cors())


//Manejo de la ruta de las imagenes
app.use('/public', express.static(__dirname + '/../storage/imgs/'))

// Rutas 
app.use('/api', HomeRouter );
app.use('/api/users', UsersRouter );
app.use('/api/posts', PostsRouter );


module.exports = app;