
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {createAllTournamentRequest,createAllBetRequest,createTournamentByIdRequest,createTournamentOutcomeRequest} =require("./controllers/Adapter")
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

app.post('/api/v1/all-bets', (req, res) => {
  console.log('POST Data: ', req.body)
  createAllBetRequest(req.body, (status, result) => {
    console.log('Result:mmmmmm ', result)
    res.status(status).json(result)
  })
})

app.post('/api/v1/all-tournaments', (req, res) => {
  console.log('POST Data: ', req.body)
  createAllTournamentRequest(req.body, (status, result) => {
    console.log('Result ', result)
    res.status(status).json(result)
  })
})


app.post('/api/v1/tournaments-id', (req, res) => {
  console.log('POST Data: ', req.body)
  createTournamentByIdRequest(req.body, (status, result) => {
    console.log('Result ', result)
    res.status(status).json(result)
  })
})

app.post('/api/v1/tournaments-outcome', (req, res) => {
  console.log('POST Data: ', req.body)
  createTournamentOutcomeRequest(req.body, (status, result) => {
    console.log('Result ', result)
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