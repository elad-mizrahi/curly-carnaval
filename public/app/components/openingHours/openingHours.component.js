(function() {
  'use strict';

  angular.module('appCreator').component('openingHours', component());

  function component() {
    function componentController($http, $log, dataStoreService) {
      var vm = this;

      //function that collects input from the aboutUs page and send that data as an object to dataStoreService.
      this.addOpeningHours = function() {

        var openingHoursData = vm.openingHours;

    
        //dataStoreService uses closure to save input form the form.
        dataStoreService.setData({ openingHours: openingHoursData });
        // $log.log(dataStoreService.getData().openingHours);
      };
    }
    return {
      bindings: {},
      templateUrl: '/app/components/openingHours/openingHours.tpl.html',
      controllerAs: 'vm',
      controller: componentController
    };
  }
}());
