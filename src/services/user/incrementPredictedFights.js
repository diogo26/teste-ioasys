const {userRepository} = require('../../repositories');

module.exports = {
    incrementPredictedFights:async (list) =>{
        try {
            return await userRepository.incrementPredictedFights(list);
        } catch (error) {
            throw error;
        }
    }
}