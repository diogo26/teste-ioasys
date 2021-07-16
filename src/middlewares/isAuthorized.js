const { promisify } = require('util');
const jwt = require('../helpers/jwt');
const { getDecodedUser } = require('../services/user');
const { errorHandler: ApplicationError } = require('../helpers');

const verify = promisify(jwt.verify);

module.exports = async (req, res, next) => {
  let token;
  try {
    if (req.headers && req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');

      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          token = credentials;
        } else {
          throw new ApplicationError('wrong-authorization-format', 403);
        }
      }
    } else {
      throw new ApplicationError('wrong-authorization-format', 403);
    }
    const decoded = await verify(token);
    const user =  await getDecodedUser(decoded.user.id);

    if (!user) {
      throw new ApplicationError('user-not-found', 404);
    }

    req.session = {
      token,
      user,
    };

    next();
  } catch (e) {
  
    res.status(e.status || 500).json({
      name:e.name,
      message: e.message || 'unexpected error occured',
    });
  }
};