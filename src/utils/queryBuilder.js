/**
 * Query Builder
 * @param {Object} conditions - Search conditions for the query.
 * @param {Array} projection - Requested fields for the query. Example: [ 'name', 'email' ]
 * @param {Object} options - Accepts skip, limit, sort.
 * @param {Array} populate - Array of fields to populate.
 */

module.exports.queryBuilder = (conditions, projection, options) => {
  const pipeline = [];

  if (conditions) {
    const match = { $match: {} };

    Object.entries(conditions).forEach(([ key, value ]) => {
      if (typeof value === 'string') {
        match.$match[key] = new RegExp(value, 'i');
      } else {
        match.$match[key] = value;
      }
    });

    pipeline.push(match);
  }

  if (projection) {
    const project = { $project: {} };

    projection.forEach((modelAttribute) => {
      project.$project[modelAttribute] = 1;
    });

    pipeline.push(project);
  }
  if(options){

      
      if (options.skip) {
        pipeline.push({ $skip: parseInt(options.skip) });
      } else {
        pipeline.push({ $skip: 0 });
      }

      if (options.limit) {
        pipeline.push({ $limit: parseInt(options.limit) });
      } else {
        pipeline.push({ $limit: 10 });
      }

      if (options.sort) {
        const sort = { $sort: {} };

        Object.entries(options.sort).forEach(([ key, value ]) => {
          sort.$sort[key] = parseInt(value);
        });

        pipeline.push(sort);
      } else {
        pipeline.push({ $sort: { createdAt: 1 } });
      }

      if (options.populate && options.populate.length > 0) {
        options.populate.forEach((item) => {
          let toPopulate = [
            {
              $lookup: {
                from: `${item.collection}`,
                localField: item.field,
                foreignField: '_id',
                as: item.field,
              },
            },]
            if(item.unwind){
              toPopulate.push(
                {$unwind: `$${item.field}`}
              )
            }
          pipeline.push(...toPopulate);
        });
      }
  }

  return pipeline;
};
