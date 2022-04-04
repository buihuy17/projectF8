const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class CourseController{
    //[GET] /courses/:slug
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then(course => 
            res.render('courses/show', {course: mongooseToObject(course)})
        )
        .catch(next);
    }

    //Create /courses/create
    create(req,res,next){
       res.render('courses/create');
    }

    //Create /courses/store
    store(req,res,next){
       // res.json(req.body);
        //Cách tạo ra một tài liệu

        //thêm vào body 1 field image để ta tự thêm
        //Khởi tạo một đối tượng Course
        const course = new Course(req.body);

        //Sử dụng mongoose để chặt chẽ hơn về mặt dữ liệu
        //truy cập đến thuộc tính save và kiểm tra xem lưu vào DataBase chưa
        course.save()
            //Phải định nghĩa rõ các field(trường) thì nó mới có thể insert vào Database được
           .then(() => {
               res.redirect('/'); //chuyển hướng về phần nào đó
           })
           //cài mongo slug =  cách npm i mongoose-slug-generator
           //nó là một plug in cho thằng mongoose và add plug in này vào phần model
           .catch(error => {

           });
        //Sau đó chuyển hướng vào trang chi tiết redirect(chuyển hướng) đọc trên docs API của express 
     }

     //Quản lí khóa học
    //courses/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next);
        
    }

    //Cập Nhật Khóa Học:[PUT]
    //courses/:id
    update(req,res,next){
        Course.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //Xóa Khóa Học:[DELETE]
    //courses/:id
    destroy(req,res,next){
        Course.deleteOne({_id : req.params.id}) //sử dụng delete của plug in
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

//Các phương thức làm việc với API: Get,Post,Put,Patch,Delete,Options,Head
module.exports = new CourseController();
