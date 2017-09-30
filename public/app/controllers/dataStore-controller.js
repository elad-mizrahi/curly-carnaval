(function() {
  'use strict';

  angular.module('appCreator').controller('dataStore', ControllerCtrl);

  function ControllerCtrl(dataStoreService) {
    var vm = this;
    vm.data = dataStoreService.getData();
  }
}());
