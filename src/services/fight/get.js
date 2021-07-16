const {fightRepository} = require('../../repositories');

const {errorHandler:ApplicationError} = require('../../helpers');

module.exports = {
    get:async (id) =>{
        try {
            const fight = await fightRepository.get(id);

            if(!fight){
                throw new ApplicationError('fight not  found',404);
            }
            return fight;
        } catch (error) {
            throw error;
        }
    }
}