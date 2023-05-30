const { Requester, Validator } = require('@chainlink/external-adapter')


const customError = (data) => {
    if (data.Response === 'Error') return true
    return false
  }

  const customParams = {
    tournament: ['tournamentId']
  }




const createAllBetRequest = (input, callback) => {
    // The Validator helps you validate the Chainlink request data
    const validator = new Validator(callback, input, customParams)

    const jobRunID = validator.validated.id
    
    const options = {
        method: 'GET',
        url: 'http://localhost:5003/api/v1/bets/get-all-bets',
        headers: {
            'Content-Type': 'application/json',
        },
        json: true,
    };
    
    Requester.request(options).then(function (error,response) {
      console.log(response,"resssss")
      console.log(error,"error from requester")
    
      response.data.result = Requester.getResult(response.data,["message"])
       callback(response.status, Requester.success(jobRunID, response))
    }).catch(function (error) {
      callback(500, Requester.errored(jobRunID, error));
    });
  }
  
  
  // This is a wrapper to allow the function to work with
  // GCP Functions
  exports.gcpservice = (req, res) => {
    createAllBetRequest(req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // AWS Lambda
  exports.handler = (event, context, callback) => {
    createAllBetRequest(event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // newer AWS Lambda implementations
  exports.handlerv2 = (event, context, callback) => {
    createAllBetRequest(JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  

  const createAllTournamentRequest = (input, callback) => {
   
    const validator = new Validator(callback, input, customParams)

    const jobRunID = validator.validated.id
    
    const options = {
        method: 'GET',
        url: 'http://localhost:5003/api/v1/bets/get-all-tournamnets',
        headers: {
            'Content-Type': 'application/json',
          },
          json: true,
    };
    
    Requester.request(options).then(function (response) {
      console.log(response,"resssss")
    
      response.data.result = Requester.getResult(response.data,["message"])
       callback(response.status, Requester.success(jobRunID, response))
     }).catch(function (error) {
      callback(500, Requester.errored(jobRunID, error));
    });
  }
  
  

  exports.gcpservice = (req, res) => {
    createAllTournamentRequest (req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  

  exports.handler = (event, context, callback) => {
    createAllTournamentRequest (event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
 
  exports.handlerv2 = (event, context, callback) => {
    createAllTournamentRequest (JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  
 

  const createTournamentByIdRequest = (input, callback) => {
    // The Validator helps you validate the Chainlink request data
    const validator = new Validator(callback, input, customParams)
    console.log(input,"input")

    const jobRunID = validator.validated.id
    const tournamentId = input.tournamentId; //validator.validated.data.fixture
     console.log(tournamentId,"tournamentId")
    
    const options = {
        method: 'POST',
      
     
        url: 'http://localhost:5003/api/v1/bets/get-all-tournamnets-by-id',
       
      
        headers: {
            'Content-Type': 'application/json',
            'id':`${tournamentId}`
          },
        
         
    };
   
    Requester.request(options).then(function (response) {
      console.log(response,"resssss")
    
      response.data.result = Requester.getResult(response.data,["message"])
       callback(response.status, Requester.success(jobRunID, response))
     }).catch(function (error) {
      callback(500, Requester.errored(jobRunID, error));
    });
  }
  
  
  // This is a wrapper to allow the function to work with
  // GCP Functions
  exports.gcpservice = (req, res) => {
    createTournamentByIdRequestt(req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // AWS Lambda
  exports.handler = (event, context, callback) => {
    createTournamentByIdRequest(event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // newer AWS Lambda implementations
  exports.handlerv2 = (event, context, callback) => {
    createTournamentByIdRequest(JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  


  const createTournamentOutcomeRequest = (input, callback) => {
    // The Validator helps you validate the Chainlink request data
    const validator = new Validator(callback, input, customParams)
    console.log(input,"input")

    const jobRunID = validator.validated.id
    const tournamentId = input.tournamentId; //validator.validated.data.fixture
     console.log(tournamentId,"tournamentId")
    
    const options = {
        method: 'POST',
      
     
        url: 'http://localhost:5003/api/v1/bets/get-tournamnets-outcome',
       
      
        headers: {
            'Content-Type': 'application/json',
            'id':`${tournamentId}`
          },
        
         
    };
   
    Requester.request(options).then(function (response) {
      console.log(response,"resssss")
    
      response.data.result = Requester.getResult(response.data,["message"])
       callback(response.status, Requester.success(jobRunID, response))
     }).catch(function (error) {
      callback(500, Requester.errored(jobRunID, error));
    });
  }
  
  
  // This is a wrapper to allow the function to work with
  // GCP Functions
  exports.gcpservice = (req, res) => {
    createTournamentOutcomeRequestt(req.body, (statusCode, data) => {
      res.status(statusCode).send(data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // AWS Lambda
  exports.handler = (event, context, callback) => {
    createTournamentOutcomeRequest(event, (statusCode, data) => {
      callback(null, data)
    })
  }
  
  // This is a wrapper to allow the function to work with
  // newer AWS Lambda implementations
  exports.handlerv2 = (event, context, callback) => {
    createTournamentOutcomeRequest(JSON.parse(event.body), (statusCode, data) => {
      callback(null, {
        statusCode: statusCode,
        body: JSON.stringify(data),
        isBase64Encoded: false
      })
    })
  }
  













  module.exports = {createAllBetRequest,
                    createAllTournamentRequest,
                    createTournamentByIdRequest,
                    createTournamentOutcomeRequest
                    }