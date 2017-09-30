(function () {
  'use strict';

  angular.module('appCreator').component('navBar', component());

  function component() {
    function componentController(Upload, $log, dataStoreService) {
      var vm = this;
      vm.uploadHandler = function (file) {
        Upload.upload({
          url: '/api/upload/',
          data: { file: file }
        }).then(
          function (res) {
            dataStoreService.setData({
              css: {
                rgbPrimary: {color:res.data.colors.primaryColor},
                rgbSecondary: {color: res.data.colors.secondaryColor}
              }
            });

          },
          function (res) {
            $log.log('Error status: ' + res.status);
          },
          function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $log.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          }
          );
      };
    }

    return {
      bindings: {},
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: '/app/components/navBar/navBar.tpl.html'
    };
  }
}());
