const policesPosts = require('./Post');
const policesUsers = require('./Users');





module.exports = {

    //** POLICES POST*/
    postUpdate: policesPosts.updatePost,
    deletePost: policesPosts.deletePost,
    createPost: policesPosts.createPost,


    //** POLICES USERS*/
    updateUser: policesUsers.updateUser,
    deleteUser: policesUsers.deleteUser,

}