(function() {
  'use strict';

  angular
    .module('frontEnd')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;
   $log.log(vm);
  }
})();
