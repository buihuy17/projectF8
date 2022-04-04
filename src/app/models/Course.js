//ta phải tạo ra thư viện Schema ( sờ kim)
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

//define(định nghĩa) ra cái lược đồ của chúng ta
const Course = new Schema({
    //require: true bắt buộc phải nhập
    name:{type:String , require: true} ,
    description:{type: String, maxlength: 255} ,
    image:{type: String,maxlength: 255} ,
    videoID:{type: String,require: true} ,
    level:{type: String,maxlength: 255} ,
    slug: { type: String, slug: 'name', unique: true },  //gen được ra từ name, unique chỉ tạo đc 1 slug và k đc trùng tên
    //createAt:{type: Date,default: Date.now} , //biết được thời gian tạo
   // updatedAt:{type: Date,default: Date.now} ,  //biết được thời gian update
} , {
    timestamps: true, // tự tạo thời gian khởi tạo và update
});

//add thêm cái plug in đọc docs trên mongoose  slug-genarator
mongoose.plugin(slug);
Course.plugin(mongooseDelete);

module.exports = mongoose.model('Course',Course);

