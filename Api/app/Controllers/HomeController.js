
//Creo el controlador del modelo y la ruta

module.exports = {

  async all(req, res) {
    let Home = {
      Saludo: 'Hola Mundo',
      Rutas: {
        Usuarios: {
          Registro: `http://localhost:4000/api/register`,
          Ver_Usuarios: {
            todos: `http://localhost:4000/api/users`,
            Por_Id: `http://localhost:4000/api/users/:id`,
          },
          Actualizar_Usuario_Put: `http://localhost:4000/api/users/put/:id`,
          Eliminar_Usuario: `http://localhost:4000/api/users/del/:id`,
        },
        Rutas_Posts: {
          Crear_Post: `http://localhost:4000/api/posts`,
          Ver_Posts: {
            todos: `http://localhost:4000/api/posts`,
            Por_Id: `http://localhost:4000/api/posts/:id`,
          },
          Actualizar_Posts_Put: `http://localhost:4000/api/posts/put/:id`,
          Eliminar_Posts: `http://localhost:4000/api/posts/del/:id`,
        },
        Rutas_Recetas: {
          Crear_Receta: `http://localhost:4000/api/recipes`,
          Ver_Recetas: {
            todas: `http://localhost:4000/api/recipes`,
            Por_Id: `http://localhost:4000/api/recipes/id/:id`,           
          },
          Actualizar_Receta_Put:`http://localhost:4000/api/recipes/put/:id`,
          Eliminar_Receta: `http://localhost:4000/api/recipes/del/:id`,
        },
      },
      Rutas_Dietas: {
        Crear_Dieta: `http://localhost:4000/api/diets`,
        Ver_Dietas: {
          todas: `http://localhost:4000/api/diets`,
          Por_Id: `http://localhost:4000/api/diets/:id`,
          Por_Recetas: `http://localhost:4000/api/diets/recipes/:id`,
        },
        Actualizar_Dietas_Put: `http://localhost:4000/api/diets/:id`,
        Eliminar_Dieta: `http://localhost:4000/api/diets/:id`,
      },
    };

    res.json(Home);
  },
};
