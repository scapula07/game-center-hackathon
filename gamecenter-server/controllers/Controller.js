const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const fs = require('fs')
const admin = require("firebase-admin");

const db=admin.firestore();
    
exports.getAllBet= async (req, res, next) => {
     const bets=[]
    const betRef = db.collection('bets');
    try{
        const snapshot = await betRef.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          bets.push({...doc.data(),id:doc.data().id})
          console.log(bets)


        });
        res.status(200).json({
            status: 'success',
            message:{
              bets: bets
            }
          });
    }catch(e){
        console.log(e)
    }
    
    


} 


exports.getAllTournament= async (req, res, next) => {
    const tournaments=[]
    const tournamentRef = db.collection('tournaments');
   try{
       const snapshot = await tournamentRef.get();
       snapshot.forEach(doc => {
         console.log(doc.id, '=>', doc.data());
         tournaments.push({...doc.data(),id:doc.data().id})
        


       });
       res.status(200).json({
           status: 'success',
           message:{
            tournaments:tournaments
           }
         });
   }catch(e){
       console.log(e)
   }
   
   


} 


exports.getAllTournamentById= async (req, res, next) => {
  const {id} = req.headers;

  
  const tournamnetRef = db.collection('tournaments').doc(id);

  try{
      const doc = await tournamnetRef.get();
      if (!doc.exists) {
        
      } else {
        console.log('Document data:', );
        res.status(200).json({
          status: 'success',
          message:{
          tournament:doc.data()
          }
        });
    }
    }catch(e){
    console.log(e)
    }

   
   


} 

exports.getTournamentOutcomeById= async (req, res, next) => {

  const {id} = req.headers;

  
  const tournamnetRef = db.collection('tournaments').doc(id);
   const gameOutcome=0
   const doc = await tournamnetRef.get();
  try{
  
      if (!doc.exists) {
        
      } else {
        console.log('Document data:', );
        if(doc.data().outcome=="0pen"){
          gameOutcome=0
            
        }else if(doc.data().outcome=="Draw"){
          gameOutcome=1
        }else if(doc.data().outcome==" Player1"){
          gameOutcome=2
        }else if(doc.data().outcome==" Player2"){
          gameOutcome=3
        }else if(doc.data().outcome=="Cancelled"){
          gameOutcome=4
        }
        console.log(gameOutcome,"outcome")
         res.status(200).json({
          status: 'success',
          message:{
            outcome:gameOutcome
            }
        });
    }
    }catch(e){
    console.log(e)
    }


}