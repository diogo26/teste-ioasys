const { errorHandler: ApplicationError } = require('../helpers');

module.exports = async (req,res,next)=>{
    try {
        if(!req.session.user.isAdmin){
            throw new ApplicationError('user is not a admin',403)
        }
        next()
      } catch (e) {
      
        res.status(e.status || 500).json({
          name:e.name,
          message: e.message || 'unexpected error occured',
        });
      }
}