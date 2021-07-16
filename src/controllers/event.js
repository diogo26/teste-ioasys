const { create,list } = require('../services/event');

module.exports = {
    createEvent:async (req,res) =>{
        try {
            const {name,date} = req.body;
            const event = await create(name,date);
            return res.status(200).json({event})
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).json({
              name: error.name,
              message: error.message,
            });
        }
    },
    listEvents: async (req, res) => {
        try {
          const {
            conditions,
            projection,
            skip,
            limit,
            sort,
          } = req.query;
    
          const events = await list(conditions, projection, { skip, limit, sort });
          const count = events.length;
          if(count === 0 ){
            return res.status(204).set({ 'Content-Length': '0' }).end();
          }
          return res.status(200).json({ data: events, count });
        } catch (error) {
          res.status(error.status || 500).json({
            name: error.name,
            message: error.message,
          });
        }
      },
}