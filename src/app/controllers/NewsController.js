const res = require("express/lib/response");

class NewsControllers{
    //[GET] / news
    index(req,res){
        res.render('news');
    }
    //[GET] /news/:slug tạo param phía sau news
    show(req,res){
        res.send('News Detail!!!');
    }
}
module.exports = new NewsControllers;
