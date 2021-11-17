const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//** IMPORTO EL MODELO DE USUARIO */
const { users, roles, posts, postres, platos  } = require('../models');

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

        let img;
        //ENCRIPTO EL PASSWORD
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));

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
            let token = jwt.sign({user: user},
                auth.secret,{expiresIn: auth.expires })
            res.json({user: user, token: token})
        })
            .catch(err => {res.status(500).json(err)})
    },

        //**LOGIN */
    async login(req, res) {
        //** recibo los datos para loguearse */
        let { email, password } = req.body;
        console.log(email, password);
        //** hago la consdulta a la db */
        await users.findOne({where: {email: email}}).then(user => {
            //** si no hay usuario retorno 404 */
            if (user) {
                //** si hay usuario comparo password */
                if (bcrypt.compareSync(password, user.password)) {
                    //** si es correcta creo un token */
                    let token = jwt.sign({ user: user }, auth.secret, { expiresIn: auth.expires })
                    res.json({ user: user, token: token })
                } else {
                    //** si el password es incorrecto */
                    res.status(401).json({ mensage: 'Contraseña incorrecta' })
                }
            } else {                
                return res.status(404).json({ mensage: 'No se ha encontrado un usuario con este Email' })                
            }
        }).catch(err => {
            //** si hay error */
            res.status(500).json({ error: err })
        })
    },

        //** LISTAR USUARIOS */
    async toListAll(req, res) {
        await users.findAll({
            include: [
                { model: roles, as: 'Roles', attributes: ['id', 'role'] },
                { model: posts, as: 'Posts', attributes: ['id', 'title'] },
                { model: postres, as: 'Postres', attributes: ['id', 'name'] },
                { model: platos, as: 'Platos', attributes: ['id', 'name'] }
            ]
        })
            .then(users => { res.json(users); })
            .catch(err => {res.status(500).json({ error: err })})
    },

        //** LISTAR USUARIOS POR ID*/
    async byIdUser(req, res) {

        let user = await users.findByPk(req.params.id)

        if (!user) res.status(500).json({ error: 'Usuario no encontrado' })
       else res.json(user);
        
    },
   
    //** LISTAR USUARIOS POR ID Y POST CREADOS*/
    async byUserPosts(req, res) {

        await users.findByPk(req.params.id)
            .then(user => {
                user.getPosts({
                attributes: ['id', 'title']
            }).then(posts =>{res.json(posts)})
        }).catch(err =>{res.status(500).json({mensage:'Ha ocurrido un error',err})})
        
    },
    
    //** LISTAR USUARIOS POR ID Y PLATOS CREADOS*/
    async byUserPlatos(req, res) {

        await users.findByPk(req.params.id)
            .then(user => {
                user.getPlatos({
                attributes: ['id', 'name']
            }).then(platos =>{res.json(platos)})
        }).catch(err =>{res.status(500).json({mensage:'Ha ocurrido un error',err})})
        
    },
    
    //** LISTAR USUARIOS POR ID Y POSTRES CREADOS*/
    async byUserPostres(req, res) {

        await users.findByPk(req.params.id)
            .then(user => {
                user.getPostres({
                attributes: ['id', 'name']
            }).then(platos =>{res.json(platos)})
        }).catch(err =>{res.status(500).json({mensage:'Ha ocurrido un error',err})})
        
    },

        //** ACTUALIZAR USER*/

    async updateUser(req, res) {

        let img;

        //ENCRIPTO EL PASSWORD
        let password = req.body.password;
        
        if (req.params.password) {
            password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));
        }

        //console.log(req.file.filename)
        if (req.file) {
            img = setImgUrl(req.file.filename)
        };

         await users.update({
            username: req.body.username,
            firts_name: req.body.firts_name,
            second_name: req.body.second_name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
            phone: req.body.phone,
            email: req.body.email,
            image: img,
            password: password,
         }, {
             where: {
                id: req.params.id,
            }
        }).then(user => {           
            let token = jwt.sign({user: user},
                auth.secret,{expiresIn: auth.expires})
            res.status(200).json({mensage:'Usuario actualizado'})})
            .catch(err => {res.status(500).json(err)})
    },

        //** ELIMINAR USUARIOS POR ID*/
    async deleteUser(req, res) {

        req.user.destroy().then(result => {
            res.json({ result, mensage: 'Usuario eliminado' })
        })
    },
    
}







// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// //** IMPORTO EL MODELO DE USUARIO */
// const { users } = require('../models');
// const { roles, posts, postres, platos } = require('../models')
// const auth = require('../../config/auth');


// //Importo la configuracion para la ruta de la img
// require(`dotenv`).config()
// const { IMG_HOST, PORT } = process.env


// function setImgUrl(filename) {
//     const ruta = IMG_HOST + PORT + '/public/' + filename
//     return ruta
// }

// module.exports = {

//     //**REGISTRO */
//     async register(req, res) {


//         let img;

//         //ENCRIPTO EL PASSWORD
//         let password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));

//         //console.log(req.file.filename)
//         if (req.file) {
//             img = setImgUrl(req.file.filename)
//         };

//         await users.create({
//             //CREO EL USUARIO
//             username: req.body.username,
//             firts_name: req.body.firts_name,
//             second_name: req.body.second_name,
//             surname: req.body.surname,
//             second_surname: req.body.second_surname,
//             phone: req.body.phone,
//             email: req.body.email,
//             image: img,
//             password: password,
//         }).then(user => {
//             let token = jwt.sign({
//                 user: user
//             },
//                 auth.secret,
//                 {
//                     expiresIn: auth.expires
//                 })
//             res.json({
//                 user: user,
//                 token: token
//             })
//         })
//             .catch(err => {
//                 res.status(500).json(err)
//             })
//     },

//     //**LOGIN */
//     async login(req, res) {
//         //** recibo los datos para loguearse */
//         let { email, password } = req.body;

//         //** hago la consdulta a la db */
//         await users.findOne({ email: email }).then(user => {
//             //** si no hay usuario retorno 404 */
//             if (!user) {
//                 return res.status(404).json({ mensage: 'Correo invalido' })
//             } else {

//                 //** si hay usuario comparo password */
//                 if (bcrypt.compareSync(password, user.password)) {

//                     //** si es correcta creo un token */
//                     let token = jwt.sign({ user: user }, auth.secret, { expiresIn: auth.expires })

//                     res.json({
//                         user: user,
//                         token: token
//                     })

//                 } else {
//                     //** si el password es incorrecto */
//                     res.status(401).json({ mensage: 'Contraseña incorrecta' })
//                 }
//             }

//         }).catch(err => {
//             //** si hay error */
//             res.status(500).json({ error: err })
//         })
//     },


//     //** LISTAR USUARIOS */
//     async toList(req, res) {

//         await users.findAll({
//             include: [{
//                 model: roles,
//                 as: 'roles',
//                 attributes: ['id', 'role']
//             }, {
//                 model: posts,
//                 as: 'posts',
//                 attributes: ['id', 'title']
//             }, {
//                 model: postres,
//                 as: 'postres',
//                 attributes: ['id', 'name']
//             }, {
//                 model: platos,
//                 as: 'platos',
//                 attributes: ['id', 'name']
//             }]
//         }).then(users => {

//             res.json(users);

//         }).catch(err => {

//             res.status(500).json({ error: err })

//         })
//     },


//     //** LISTAR USUARIOS POR ID*/
//     async byIdUser(req, res) {

//         let user = await users.findByPk(req.params.id)

//         if (!user) {
//             res.status(500).json({ error: 'Usuario no encontrado' })
//         } else {
//             res.json(user);
//         }
//     },

//     //** LISTAR POSTS POR ID DE USER*/

//     /*   include: [{ model: roles, as: 'roles', attributes: ['id', 'role'] },
//            { model: posts, as: 'posts', attributes: ['id', 'title'] },
//            { model: postres, as: 'postres', attributes: ['id', 'name'] },
//            { model: platos, as: 'platos', attributes: ['id', 'name'] }] */


//     async userPosts(req, res, next) {
        
//         await users.findByPk(req.params.id)
//             .then(users => {
//                 user.getPosts({
//                     attributes: ['id', 'title']
//                 })
//                     .then(post => {
//                     res.json(post)
//                 })
//             }).catch(err => {
//             res.status(500).json(err)
//         })
     
//     },

//     //** ACTUALIZAR USER*/

//     async updateUser(req, res) {

//         let img;

//         //ENCRIPTO EL PASSWORD
//         let password = req.body.password;
//         if (req.params.password) {
//             password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));
//         }

//         //console.log(req.file.filename)
//         if (req.file) {
//             img = setImgUrl(req.file.filename)
//         };

//          await users.update({
//             username: req.body.username,
//             firts_name: req.body.firts_name,
//             second_name: req.body.second_name,
//             surname: req.body.surname,
//             second_surname: req.body.second_surname,
//             phone: req.body.phone,
//             email: req.body.email,
//             image: img,
//             password: password,
//          }, {
//              where: {
//                 id: req.params.id,
//             }
//         }).then(user => {
//             let token = jwt.sign({
//                 user: user
//             },
//                 auth.secret,
//                 {
//                     expiresIn: auth.expires
//                 })
//             res.json({
//                 user: user,
//                 token: token
//             })
//         })
//             .catch(err => {
//                 res.status(500).json(err)
//             })
//     },

//     //** ELIMINAR USUARIOS POR ID*/
//     async deleteUser(req, res) {

//         req.user.destroy().then(result => {
//             res.json({ result, mensage: 'Usuario eliminado' })
//         })
//     },
// }