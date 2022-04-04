const res = require("express/lib/response");
const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class MeController{
    //me/stored/courses
    storedCourses(req,res,next){
        Course.find()
            .then(courses =>  res.render('me/stored-courses' , {
                courses: mutipleMongooseToObject(courses) //biến nó thành paaint object
            }) )
            .catch(next);
       
    }
}
module.exports = new MeController();
