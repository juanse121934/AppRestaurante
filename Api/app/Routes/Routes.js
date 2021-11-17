//Importo express
const {Router} = require(`express`);
const cors = require('cors')

//Importo morgan
const morgan = require(`morgan`);

const HomeRouter = require(`./Home`);
const UsersRouter = require(`./Users`);
const PostsRouter = require(`./Posts`);


const router = Router();


//Milddlewares
// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));
// router.use(morgan(`dev`));
// router.use(cors())


// //Manejo de la ruta de las imagenes
// router.use('/public', express.static(__dirname + '/../storage/imgs/'))

// Rutas 
router.use('/api', HomeRouter);
router.use('/api/users', UsersRouter);
router.use('/api/posts', PostsRouter);


module.exports = router;