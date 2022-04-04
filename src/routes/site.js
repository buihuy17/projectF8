//file này dùng để lưu các path k có nguồn tài nguyên hoặc ít tài nguyên và để đỡ p dùng nhiều
//VD:home,search,...
//có site.js phải có thêm file siteController

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//newsControllers.index;

router.get('/search', siteController.search); //truy cập tới phương thức tên là show ở bên NewsColtrolles

router.get('/', siteController.index); // tuyến đường đọc từ trên xuống nên mình cần cho nó xuống dưới cùng để nó có thể đọc qua các path slug trước


module.exports = router;
