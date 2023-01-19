// const app = require("../../app");
const categories = require("./categories");
const postRoutes = require('./postRoute');
const tagRoutes = require('./tagRoutes');
const addRoutes = require('./addRoutes');
const listRoutes = require('./listingRoutes');
const likeRoutes = require('./postRoute');
const commentRoutes = require('./commentRoutes');

module.exports = function(app){
    app.use('/api/category', categories);
    app.use('/api/post',postRoutes);
    app.use('/api/tag', tagRoutes);
    app.use('/api/add' , addRoutes);
    app.use('/api/list' ,listRoutes);
    app.use('/api/like' ,likeRoutes);
    app.use('/api/comment',commentRoutes);
    app.use('/api/comment' , commentRoutes);
}
