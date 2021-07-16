const { userRepository } = require('../../repositories');
const {
    errorHandler: ApplicationError,
    encryptor,
  } = require('../../helpers');

module.exports = {
    resetPassword:async (token,password,confirmPassword) => {
        try {
            const user = await userRepository.getUserBy({passwordResetToken:token});
            if(!user){
                throw new ApplicationError('user-not-found',404);
            }
            
            if(password!==confirmPassword){
                throw new ApplicationError('passwords dont match',401);
            }
            if (new Date() > user.passwordResetTokenExpiresAt){
                throw new ApplicationError('Expired token', 403)
            }
            password = encryptor.hashPassword(password);

            return await userRepository.update(user.id,{
                password:password,
                passwordResetToken:null,
                passwordResetTokenExpiresAt:null
            })

        } catch (error) {
            throw error;
        }
    }
}