
//Creo el controlador del modelo y la ruta

module.exports = {

  async all(req, res) {
    let Home = {
      Gretting: 'Hello World',
      Routes: {
        Users: {
          Register_post: `http://localhost:4000/api/users/register`,
          Login_post: `http://localhost:4000/api/users/login`,
          View_Users_get: {
            All: `http://localhost:4000/api/users`,
            By_Id: `http://localhost:4000/api/users/:id`,
          },
          Update_User_patch: `http://localhost:4000/api/users/:id`,
          Delete_User_delet: `http://localhost:4000/api/users/:id`,
        },
        Posts: {
          Create_Post: `http://localhost:4000/api/posts`,
          View_Posts: {
            All: `http://localhost:4000/api/posts`,
            By_Id: `http://localhost:4000/api/posts/:id`,
          },
          Update_Posts_patch: `http://localhost:4000/api/posts/:id`,
          Delete_Posts_delete: `http://localhost:4000/api/posts/:id`,
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
