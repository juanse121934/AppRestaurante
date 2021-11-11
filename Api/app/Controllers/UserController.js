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

    //**LOGIN */
   async login(req,res){
    
    },
    
    //**REGISTRO */
    async register(req, res) {

        let img;

        //ENCRIPTO EL PASSWORD
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(auth.rounds));

        //console.log(req.file.filename)
        if (req.file) {
            img = setImgUrl(req.file.filename)
        };
        
        users.create({
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
                    user:user,
                    token:token})
            })
            .catch(err => {
            console.log(err)
        })
},
}

