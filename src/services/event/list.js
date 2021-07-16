
const { queryBuilder } = require('../../utils/queryBuilder');
const { eventRepository } = require('../../repositories');

module.exports = {
    list: (conditions, projections, options) => {
      try {
        const query = queryBuilder(conditions, projections,{...options,
        populate:[{
          field:'fights',
          collection:'fights',
          unwind:false
        }]});
        return eventRepository.getEvents(query);
      } catch (error) {
        throw error;
      }
    },
  };