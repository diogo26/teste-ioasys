const {fightRepository} = require('../../repositories');
const {get} = require('./get');
const {errorHandler:ApplicationError} = require('../../helpers');
const {listPredicted} = require('../predict');
const {incrementPredictedFights} = require('../user')

module.exports = {
    setWinner:async (idFight,fighter,result)=>{
        try {
            if(!result){
                throw new ApplicationError('result must be seted',400);
            }
            let fight = await get(idFight);
            fight = await fightRepository.update(fight.id,{winner:fighter});
            let list = await listPredicted(idFight,result,fighter)
            list = list.map(list => {return list.userId})
            await incrementPredictedFights(list);
        } catch (error) {
            throw error;
        }
    }
}