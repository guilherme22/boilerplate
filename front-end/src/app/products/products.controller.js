(function() {
  'use strict';

  angular
    .module('frontEnd')
    .controller('ProductsController',ProductsController);

  /** @ngInject */
  function ProductsController($log, Products) {

    var vm = this;
    vm.Products = [];
    vm.Product = {};

    vm.showProduct = function(Product){

        vm.Product = Product;

        $log.log(vm.Product);

    };

    vm.GetProducts = function(){
      //chamadno Resource de product
      Products.query({}).$promise.then(function(products){
        vm.Products = products;
      });
    }

  }
})();
