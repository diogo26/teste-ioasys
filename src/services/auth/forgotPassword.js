const {
    errorHandler: ApplicationError
  } = require('../../helpers'); 
const { encryptor, mailer } = require('../../utils');

const {
    [process.env.NODE_ENV]: { baseUrl },
  } = require('../../config/env');

  const { userRepository } = require('../../repositories');

  
module.exports = {
    forgotPassword:async (email) =>{
        try{
            const user = await userRepository.getUserBy({email});
            if(!user){
                throw new ApplicationError('user-not-found',404);
            }
            const token = encryptor.generateRandString() + encryptor.generateRandString();
            const expiresAt = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000));
            
            await userRepository.update(user.id,{
                passwordResetToken:token,
                passwordResetTokenExpiresAt:expiresAt
            });

            const content = {
                from: 'Verdict Light <no-reply@ioasys.com.br>',
                to: user.email,
                subject: 'Esqueci minha senha.',
                text: `${baseUrl}/user/${token}/password`,
                html: `<span>${baseUrl}/user/${token}/password</span>`,
              };
            
            return mailer.dispatchMail(content)

        }catch(error){
            throw error
        }
    }
}