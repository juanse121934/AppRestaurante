const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//** IMPORTO EL MODELO DE USUARIO */
const { users } = require('../models');
const auth = require('../../config/auth');


//Importo la configuracion para la ruta de la img
require(`dotenv`).config()
const { IMG_HOST, PORT } = process.env


function setImgUrl(filename) {
    const ruta = IMG_HOST + PORT + '/public/' + filename
    return ruta
}

module.exports = {

    //**REGISTRO */
    async register(req, res) {
        console.log(req.body)

        let img;

        //ENCRIPTO EL PASSWORD
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));

        //console.log(req.file.filename)
        if (req.file) {
            img = setImgUrl(req.file.filename)
        };

        await users.create({
            //CREO EL USUARIO
            username: req.body.username,
            firts_name: req.body.firts_name,
            second_name: req.body.second_name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
            phone: req.body.phone,
            email: req.body.email,
            image: img,
            password: password,
        }).then(user => {
            let token = jwt.sign({
                user: user
            },
                auth.secret,
                {
                    expiresIn: auth.expires
                })
            res.json({
                user: user,
                token: token
            })
        })
            .catch(err => {
                res.status(500).json(err)
            })
    },

    //**LOGIN */
    async login(req, res) {

        console.log(req.body)
        //** recibo los datos para loguearse */
        let { email, password } = req.body;

        //** hago la consdulta a la db */
        await users.findOne({ email: email }).then(user => {
            //** si no hay usuario retorno 404 */
            if (!user) {
                return res.status(404).json({ mensage: 'Correo invalido' })
            } else {

                //** si hay usuario conparo password */
                if (bcrypt.compareSync(password, user.password)) {

                    //** si es correcta creo un token */
                    let token = jwt.sign({ user: user }, auth.secret, { expiresIn: auth.expires })

                    res.json({
                        user: user,
                        token: token
                    })

                } else {
                    //** si el password es incorrecto */
                    res.status(401).json({ mensage: 'Contraseña incorrecta' })
                }
            }

        }).catch(err => {
            //** si hay error */
            res.status(500).json({ error: err })
        })
    },


    //** LISTAR USUARIOS */
    async toList(req, res) {

        await users.findAll().then(users => {
        
            res.json(users);

        }).catch(err => {

            res.status(500).json({ error: err })
            
    })
    },
    
    //** LISTAR USUARIOS POR ID*/
    async byIdUser(req, res) {

        let user = await users.findByPk(req.params.id)

        if (!user) {
            res.status(500).json({ error:'Usuario no encontrado'})
        } else {
            res.json(user);
        }
    },
}


// let post = await posts.findByPk(req.params.id);

// if (!post) {

//     res.status(404).json({ message: 'Post no se encontrado' });

// } else {
//     res.json(post)

// }
