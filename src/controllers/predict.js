const {create} = require('../services/predict');

module.exports = {
    createPredict:async (req,res) =>{
        try {
            const { 
                params:{idFight},
                session:{user},
                body:{result,fighter}
            } = req;
            const predict = await create(user._id,idFight,result,fighter);
            return res.status(200).json({predict});
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({
              name: error.name,
              message: error.message,
            });
        }
    }
    
}