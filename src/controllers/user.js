const {create,resetPassword} = require('../services/user');

module.exports = {
    createUser:async (req,res) =>{
        try{
           const{
               email,
               password,
               name
           } = req.body;
           const user = await create(email,password,name)
           return res.status(200).json({user});
        }catch(error){
            console.error(error);
            res.status(error.status || 500).json({
              name: error.name,
              message: error.message,
            });
        }
    },

    resetPasswordUser:async (req,res) =>{
        try {
            const {
                params: { token },
                body: {
                    password,
                    confirmPassword,
                    },
                } = req;                
                
            await resetPassword(token,password,confirmPassword);
            return res.status(204).set({ 'Content-Length': '0' }).end();
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({
              name: error.name,
              message: error.message,
            });
        }
    }
}