const { Requester, Validator } = require('@chainlink/external-adapter')


const customError = (data) => {
    if (data.Response === 'Error') return true
    return false
  }

const customParams = {
    betId: ['betId']
  }





const createRequest = (input, callback) => {
    // The Validator helps you validate the Chainlink request data
    const validator = new Validator(callback, input, customParams)
    console.log(validator,"validator")
    const jobRunID = validator.validated.id
    
    const options = {
        method: 'GET',
        url: 'http://localhost:5003/api/v1/bets/get-all-bets',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    Requester.request(options).then(function (response) {
      console.log(response,"resssss")
    
      response.data.result = Requester.getResult(response.data, ['winner'])
       callback(response.status, Requester.success(jobRunID, response))
    }).catch(function (error) {
      callback(500, Requester.errored(jobRunID, error));
    });
  }
  
  
  // This is a wrapper to allow the function to work with
  // GCP Functions
  exports.gcpservice = (req, res) => {
    createRequest(req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // AWS Lambda
  exports.handler = (event, context, callback) => {
    createRequest(event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // newer AWS Lambda implementations
  exports.handlerv2 = (event, context, callback) => {
    createRequest(JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  
  // This allows the function to be exported for testing
  // or for running in express
  module.exports.createRequest = createRequest