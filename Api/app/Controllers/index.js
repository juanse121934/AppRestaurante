const Users = require('./User');
const Home = require('./Home');
const Posts = require('./Posts');


module.exports = {
    home: Home.all,

    //** RUTAS USERS */
    register: Users.register,
    login: Users.login,
    toListAll: Users.toListAll,
    byIdUser: Users.byIdUser,
    byUserPosts: Users.byUserPosts,
    byUserPlatos: Users.byUserPlatos,
    byUserPostres: Users.byUserPostres,
    updateUser: Users.updateUser,
    deleteUser: Users.deleteUser,

    //** RUTAS POSTS */
    createPosts: Posts.create,
    toListPosts: Posts.allPosts,
    byIdPost: Posts.byIdPost,
    byIdAutor: Posts.byIdAutor,
    updatePost: Posts.updatePost,
    deletePost: Posts.deletePost,
    //findPost: Posts.findPost,
   
    
}

