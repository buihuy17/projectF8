//Cấu hình cho thằng mongoDB,đây chỉ là cấu trúc cơ bản, trong thực tế sẽ còn kĩ và sâu hơn nữa

// Using Node.js `require()`
const mongoose = require('mongoose');

//tạo hàm để kết nối tới mongoDB
async function connect(){
    // await phải nằm trong một async function nên phải thêm 1 từ async đứng trước
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect Successfully!!');
    }
    catch (error) {
        console.log('Connect Failure!!');
    }
    //async có phần kiểm tra lỗi nên cần phải cho vào try catch để bắt lỗi
}

module.exports = {connect};
