'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/api/products', require('./api/products'));
  
};
