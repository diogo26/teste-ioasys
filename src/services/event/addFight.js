const { eventRepository } = require('../../repositories');

module.exports = {
   
    addFight:async (event,fightId) =>{
       event.fights.push(fightId);
       await eventRepository.update(event.id,event)
    } 

}