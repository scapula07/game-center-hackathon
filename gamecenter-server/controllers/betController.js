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