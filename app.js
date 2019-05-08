const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const authRouter = require('./routes/auth');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//  API Routes
app.use('/api/v1/auth', authRouter);


//  Welcome Route
app.get('/', (req, res) =>{
  res.status(200).json({
    status: 200,
    message: 'Welcome to UNIBEN Chat endpoint'
  })
});



// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status : err.status,
    error : req.app.get('env') === 'development' ? err : {}
  })
  
});

module.exports = app;
