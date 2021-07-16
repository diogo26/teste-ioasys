const  {predictRepository} = require('../../repositories');
const { queryBuilder } = require('../../utils/queryBuilder');
const mongoose  = require('mongoose')

module.exports = {
    listPredicted:async (fightId,result,fighter) =>{
    const query =  await queryBuilder({
        fightId:mongoose.Types.ObjectId(fightId),
        result,
        fighter
    })
    return await predictRepository.list(query)
    }
}