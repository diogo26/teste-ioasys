const {fightRepository} = require('../../repositories');
const {get,addFight} = require('../event');
const {errorHandler:ApplicationError } = require('../../helpers');

module.exports = {
    createFight:async (eventId,{fighterBlueCorner,fighterRedCorner,date}) => {
        try {
            const event = await get(eventId);


            if(new Date(date)< new Date(event.date)){
                throw new ApplicationError('Cant create fight before event begin.',400);
            }
            if(!fighterRedCorner || !fighterBlueCorner){
                throw new ApplicationError('The fight must have two fighters',400);
            }
            const fight = await fightRepository.create({fighterBlueCorner:fighterBlueCorner,
                fighterRedCorner:fighterRedCorner,date:date});
            await addFight(event,fight.id)
            return fight;
        } catch (error) {
            throw error;
        }
    }
}