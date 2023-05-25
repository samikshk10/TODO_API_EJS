/* assignment
todo ->get all todos
post/todo ->add new todo(FORM URL OR JSON)
patch||put -> to update todo on given id
//////put changes whole data and patch changes partial data not whole data 
delete -> remove particular todo on given id
get/todo/:id -> return only todo which id matched
*/

const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const appConfig = require('./config');
const router = require('./routes/index.route');
const userRouter = require('./routes/user.route');
const todoRoutes = require("./routes/todo.route")
const getConnection = require("./config/db")



//init
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const conn = getConnection();

//middleware
app.use("/", (req, res, next) => {
    req.conn = conn;
    next();
});


//routes
app.use('/', router);
app.use('/users', userRouter);
app.use("/todo", todoRoutes);


//server activation
app.listen(appConfig.PORT || 8000, () => {
    console.log("server is running at PORT>>>" + appConfig.PORT);
});