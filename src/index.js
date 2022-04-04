const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override') //import thư viện giúp file hbs hỗ trợ các phương thức Get,Post
const morgan = require('morgan');
const {engine}  = require ('express-handlebars');
const port = 3000;
const db = require('./config/db');

//Connect DB
db.connect();

const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));

//middleware xử lí dữ liệu theo phương thức GET và POST
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({
    extname:'.hbs',
    helpers: {
      sum: (a,b) => a+b,
  },
}));
  app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' , 'views'));

//routes init
route(app);

app.listen(port, () => {
  console.log(`EApp listening at http://localhost:${port}`)
});