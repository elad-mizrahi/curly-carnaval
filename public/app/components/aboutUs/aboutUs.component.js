(function() {
  'use strict';

  angular.module('appCreator').component('aboutUs', component());

  function component() {
    function componentController(dataStoreService) {
      var vm = this;

      this.addAboutUs = function() {
        var aboutUsData = {
          name: vm.name,
          description: vm.description,
          url: vm.url
        };

        vm.inputData = aboutUsData;

        dataStoreService.setData(aboutUsData);
      };

    }

    return {
      bindings: {},
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: '/app/components/aboutUs/aboutUs.tpl.html'
    };
  }
}());
