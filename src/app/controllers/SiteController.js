const res = require("express/lib/response");
const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteControllers{
    //[GET] /       đây là trang home
    index(req,res,next){
        //đây viết dưới dạng sử dụng callBack
        /**  Course.find({}, function(err,courses){
            if(!err){
                res.json(courses);
            }
            else{
                res.status(400).json({error:'ERROR!!'});
            }
        });
        */

        //viết dưới dạng promise
        Course.find({})
            .then(courses =>{
                // courses = courses.map(course => course.toObject())
                //để tránh mỗi khi xử lí handlebar này tạo hàm
                res.render('home', {
                    //truyền dữ liệu cho client duyệt qua các html css
                    courses: mutipleMongooseToObject(courses)
                })
            } ) //then là khi thành công //muốn trả ra json thì res.json(courses)
            .catch(next) //catch là khi gặp lỗi truyền vào function với biến error

        // res.render('home');
    }
    //[GET] /search
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteControllers();
