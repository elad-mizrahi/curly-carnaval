(function() {
  'use strict';

  angular.module('appCreator').component('phoneDisplay', component());

  function component() {
    function componentController() {
      var vm = this;
    }

    return {
      bindings: {
        hero: '=',
        description: '=',
        url: '=',
        images: '=',
        hours: '=',
        css: '='
      },
      templateUrl: '/app/components/phoneDisplay/phoneDisplay.tpl.html',
      controller: componentController,
      controllerAs: 'vm'
    };
  }
}());
