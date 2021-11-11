require(`dotenv`).config();


module.exports = {
  // Conexion a la DB
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "restaurante",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "postgres",
  logging: false,
  define: {
    //Generador de claves foraneas id_id
    underscored: true,
  },

  //Configuracion de los seeds para crear una tabla y guardar las sedders
  seederStorage: "sequelize",
  seederStorageTableName:"seeds",
  
  
  //Configuracion de los seeds para crear una tabla y guardar las migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName:"migrations",
  
};

