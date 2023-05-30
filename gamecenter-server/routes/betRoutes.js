const express = require('express');


const {getAllBet,getAllTournament,getAllTournamentById} = require('../controllers/Controller');
const {} = require('../controllers/Adapter');


const router = express.Router();

router.route('/get-all-bets').get(getAllBet);
router.route('/get-all-tournamnets').get(getAllTournament);
router.route('/get-all-tournamnets-by-id').post(getAllTournamentById);


module.exports = router;