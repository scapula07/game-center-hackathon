const express = require('express');


const {getAllBet} = require('./../controllers/betController');
const {} = require('./../controllers/chainlinkExternalAdapter');


const router = express.Router();

router.route('/get-all-bets').get(getAllBet);


module.exports = router;