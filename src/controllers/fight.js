const {createFight,setWinner} = require('../services/fight');

module.exports = {
    addFightToEvent: async (req,res) =>{
        try {
          const {
            params:{idEvent},
            body:{fighterRedCorner,
                 fighterBlueCorner,
                 date}
               } = req;

          const fight = await createFight(idEvent,{fighterBlueCorner,fighterRedCorner,date});
          return res.status(200).json({fight})
        } catch (error) {
          res.status(error.status || 500).json({
            name: error.name,
            message: error.message,
          });
        }
    },
    setWinner:async (req,res) =>{
      try {
        const {
          params:{idFight},
          query:{fighter,result}
        } = req;
        await setWinner(idFight,fighter,result);
        return res.status(204).set({ 'Content-Length': '0' }).end();
      } catch (error) {
        res.status(error.status || 500).json({
          name: error.name,
          message: error.message,
        });
      }
    }
}