const {authenticate,forgotPassword} = require('../services/auth');

module.exports = {
    authUser:async (req,res) => {
        try {
            const {email,password} = req.body;
            const auth = await authenticate(email,password);
            return res.status(200).json({auth})
            
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({
              name: error.name,
              message: error.message,
            });
        }
    },
    forgotPasswordUser:async (req,res)=>{
        try {
            const {email} = req.body;
            await forgotPassword(email);
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