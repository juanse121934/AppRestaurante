
// Importo multer para el manejo de imagenes
const multer = require('multer')


//Creo la instancia de multer para guardar en disco
const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    //Agrego la direccion donde se guardaran las images
    cb(null, './storage/imgs')
  },
  
  // Defino el nombre del archivo
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
  }
})

const upload = multer({ storage })

module.exports = upload;