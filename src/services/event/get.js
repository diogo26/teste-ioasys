const {eventRepository} = require('../../repositories');
const {errorHandler:ApplicationError} = require('../../helpers')

module.exports = {
    get:async (id) =>{
        try {
            const event = await eventRepository.get(id);
            if(!event){
                throw new ApplicationError('event-not-found',404);
            }
            return event;
        } catch (error) {
            throw error;
        }
    }
}