const User = require('./UserController');
const Home = require('./HomeController');
const Posts = require('./PostsController');


module.exports = {
    home: Home.all,
    register: User.register,
    login: User.login,
    toListUsers: User.toList,

    //** RUTAS POSTS */
    createPosts: Posts.create,
    toListPosts: Posts.allPosts,
    byIdPost: Posts.byIdPost,
    updatePost: Posts.updatePost,
    deletePost: Posts.deletePost,
    
}

