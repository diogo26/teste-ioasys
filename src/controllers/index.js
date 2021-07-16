const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const modules = fs
  .readdirSync(__dirname)
  .filter(file => file !== basename)
  .reduce((previous, current) => {
    const [fileName] = current.split('.');
    // eslint-disable-next-line
    previous[`${fileName}Controller`] = require(path.join(__dirname, current));
    return previous;
  }, {});


module.exports = modules;
