const {
    errorHandler: ApplicationError,
    encryptor
} = require('../../helpers');

const { userRepository } = require('../../repositories');

module.exports = {
    authenticate:async (email,password) => {
        try {
            if(!email || !password){
                throw new ApplicationError('Email and password are required',403);
            }

            const user = await userRepository.getUserBy({email});

            if(!user){
                throw new ApplicationError('user-not-found',404)
            }

            if (!encryptor.comparePassword(password, user.password)) {
                throw new ApplicationError('invalid password', 401);
            }

            const token = encryptor.generateToken({
                id: user.id,
                name: user.name,
                email: user.email,
              });
              
            return {
                user,
                token
            };

        } catch (error) {
            throw error;
        }
    }
}