const {userRepository} = require('../../repositories');

module.exports = {
    getDecodedUser:async (id) =>{
        try{
            return await userRepository.getUserBy({_id:id})
        }catch(error){
            throw error;
        }
    }
}