 (function() {
  'use strict';
  angular
    .module('frontEnd')
    .factory('Products', MainController);
  /** @ngInject */
  function MainController($resource, api) {
    return $resource(api.dev + '/products/:id',{id: '@id'},{'get':{method:'GET'},'save':{method:'POST'},'query':{method:'GET',isArray:true},'remove': {method:'DELETE'},'delete': {method:'DELETE'},'update': {method: 'PUT'}});
 	}
})();
