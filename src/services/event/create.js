const {
    errorHandler: ApplicationError,
} = require('../../helpers');

const { eventRepository } = require('../../repositories');

module.exports = {
    create:async (name,date) =>{
        try {
            if(!name||!date){
                new ApplicationError('name and date needed',400);
            }

            if(new Date() > new Date(date)){
               throw new ApplicationError(`can't create a past or live event`,403);
            }
            return eventRepository.create({
                name:name,
                date:date
            })
        } catch (error) {
            throw error;
        }
        
    }
}
