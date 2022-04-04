const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//newsControllers.index;

router.get('/:slug', newsController.show); //truy cập tới phương thức tên là show ở bên NewsColtrolles

router.get('/', newsController.index); // tuyến đường đọc từ trên xuống nên mình cần cho nó xuống dưới cùng để nó có thể đọc qua các path slug trước


module.exports = router;
