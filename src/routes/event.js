const router = require('express').Router();
const {eventController,fightController,
predictController} = require('../controllers');

const {isAdmin,isAuthorized } = require('../middlewares');


router.post('/',[isAuthorized,isAdmin],eventController.createEvent);
router.get('/',isAuthorized,eventController.listEvents);
router.post('/:idEvent/fight',[isAuthorized,isAdmin],fightController.addFightToEvent);
router.post('/:idFight/predict',isAuthorized,predictController.createPredict);
router.patch('/:idFight/winner',[isAuthorized,isAdmin],fightController.setWinner);

module.exports = router;