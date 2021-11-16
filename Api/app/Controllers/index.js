const Users = require('./UserController');
const Home = require('./HomeController');
const Posts = require('./PostsController');


module.exports = {
    home: Home.all,

    //** RUTAS USERS */
    register: Users.register,
    login: Users.login,
    toListUsers: Users.toList,
    byIdUser: Users.byIdUser,
    updateUser: Users.updateUser,
    deleteUser: Users.deleteUser,

    //** RUTAS POSTS */
    createPosts: Posts.create,
    toListPosts: Posts.allPosts,
    byIdPost: Posts.byIdPost,
    updatePost: Posts.updatePost,
    deletePost: Posts.deletePost,
    findPost: Posts.findPost,
    
}

