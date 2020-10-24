var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");

const cors = require("cors");

// deklarasi router disini
var indexRouter = require('./routes/index');

const adminRouter = require('./routes/admin')
const usersRouter = require('./routes/users')
const departureCity = require('./routes/departure_city')
const depatureTime = require('./routes/departure_time')
const timeArrived = require('./routes/time_arrived')
const destinationCity = require('./routes/destination_city')
const destinations = require('./routes/destination')
const facilities = require('./routes/facilities')
const transit = require('./routes/transit')
const airlinesRouter = require('./routes/airlines')
const methodOveride = require('method-override')
const airlinesClass = require('./routes/airlines_class');
const countryRouter = require('./routes/country')
const bookingRouter = require('./routes/booking')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOveride("_method"));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')))

// panggil routernya disini
app.use('/', indexRouter);

app.use('/admin', adminRouter)

app.use('/api/users', usersRouter);
app.use('/api/departure_city', departureCity)
app.use('/api/departure_time', depatureTime)
app.use('/api/time_arrived', timeArrived)
app.use('/api/destination_city', destinationCity)
app.use('/api/destinations', destinations)
app.use('/api/facilities', facilities)
app.use('/api/transit', transit)
app.use('/api/airlines',airlinesRouter)
app.use('/api/airlines_class',airlinesClass)
app.use('/api/country',countryRouter)
app.use('/api/booking',bookingRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
