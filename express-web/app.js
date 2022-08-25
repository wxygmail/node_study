const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const layout = require('express-ejs-layouts') // 使用公共的layout布局须引入这个！
const setting = require('./setting')
const MongoStore = require('connect-mongo')
const session = require('express-session')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listRouter = require('./routes/list');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser()); // cookie 解释的中间件
app.use(express.static(path.join(__dirname, 'public')));
app.use(layout)
app.use(session({
  secret: setting.cookieSecret,
  resave: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://xiaoyanwu:123456@localhost:27017',
    dbName: setting.db
  }),
  saveUninitialized: true,
  cookie: {secure: true}
}))
app.dy

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
