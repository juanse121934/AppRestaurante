const policesPosts = require('./PostPolicy');





module.exports = {
    postUpdate: policesPosts.updatePost,
    deletePost: policesPosts.deletePost,
}