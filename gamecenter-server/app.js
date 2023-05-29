
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const createRequest =require("./controllers/chainlinkExternalAdapter").createRequest
const betRoutes = require('./routes/betRoutes');


const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');


const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));
// app.options('*', cors());
app.use(express.static('./public'));

app.post('/', (req, res) => {
  console.log('POST Data: ', req.body)
  createRequest(req.body, (status, result) => {
    console.log('Result:mmmmmm ', result)
    res.status(status).json(result)
  })
})

app.use('/api/v1/bets', betRoutes);



app.all('*', (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    next(err);
  });
  
  app.use(globalErrorHandler);


module.exports = app;