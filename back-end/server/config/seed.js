/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Products = require('../api/products/products.model');


// Insert seed data below
var productsSeed = require('../api/products/products.seed.json');

// Insert seed inserts below
Products.find({}).remove(function() {
	Products.create(productsSeed);
});
