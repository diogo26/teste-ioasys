const {
    errorHandler: ApplicationError,
    encryptor
} = require('../../helpers');

const { userRepository } = require('../../repositories');

module.exports = {
    create:async (email,password,name) =>{
        if(!email || !password || !name){
            throw new ApplicationError('Email,password and name are needed.',400);
        }
        if(password.length < 8) {
            throw new ApplicationError('Password must have minimum 8 caracters.',400);
        }
        password = encryptor.hashPassword(password);
        
        return await userRepository.create({
            email:email,
            password:password,
            name:name,
            isAdmin:false,
            predictedFights:0
        })
    }
}