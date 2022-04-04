//file này giúp xử lí vấn đề ở mongoose

const { default: mongoose } = require("mongoose");

//đây là hàm xử lí array
module.exports ={
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    //trường hợp có 1 document]
    mongooseToObject : function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }

};
