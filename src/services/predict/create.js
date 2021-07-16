const {predictRepository} = require('../../repositories');
const {errorHandler:ApplicationError} = require('../../helpers') 
const {get} = require('../fight/get');

module.exports = {
    create:async (userId,fightId,result,fighter) => {
        try {
            const fight = await get(fightId)
            if(new Date() > new Date(fight.date)){
                throw new ApplicationError('you cant predict a fight after begin',403)
            }
            const predict = await predictRepository.create({
                userId:userId,
                fightId:fightId,
                fighter:fighter,
                result:result
            })
            return predict;
        } catch (error) {
            throw error
        }
    }
}