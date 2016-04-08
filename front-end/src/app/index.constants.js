/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('frontEnd')
    .constant('moment', moment)
    .constant('api',{
    	dev: 'http://localhost:9000/api',
    	production: 'http://localhost:9000/api'
    });

})();
