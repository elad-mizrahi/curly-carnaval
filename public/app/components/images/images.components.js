(function() {
  'use strict';

  angular.module('appCreator').component('images', component());

  function component() {
    function componentController($http, $log, dataStoreService) {
      var vm = this;

      vm.addImages = function() {
        var API_KEY = '6163526-0705630c2bbae1f316f52b478';
        var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent(vm.query);

        var picturesListArray = [];
        $http.get(URL).then(function(response) {
          for (var i = 0; i < 3; ++i) {
            if(response.data.hits[i]){
              picturesListArray.push(response.data.hits[i].webformatURL);
            }
          }
          dataStoreService.setData({ images: picturesListArray });
        });

        vm.saveDataToDb = function() {
          dataStoreService.saveDataToDb(picturesListArray);
        };
      };
    }

    return {
      bindings: {},
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: 'app/components/images/images.tpl.html'
    };
  }
}());
