import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser'
import authRouter from './routes/auth';

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
// app.use('/', (err,req, res) => {
//  return res.status(err.status || 500).json({
//     status : err.status,
//     error : req.app.get('env') === 'development' ? err : {}
//   }) 
// });


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening to port ${port}`); });

export default app;