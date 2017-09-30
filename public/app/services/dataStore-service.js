
(function () {
  'use strict';

  angular.module('appCreator').factory('dataStoreService', Factory);

  /** @ngInject */
  function Factory() {
    var businessObject = {
      name: 'Example',
      description: 'this is a description of the company',
      url: 'http://www.stam.com',
      images: ['./images/samplePicture1.jpg', './images/samplePicture2.jpg', './images/samplePicture3.jpg'],
      openingHours: '',

      css: {
        rgbPrimary: { color: 'rgb(' + 225 + ',' + 30 + ',' + 30 + ')' },
        rgbSecondary: { color: 'rgb(' + 225 + ',' + 80 + ',' + 130 + ')' }
      }

    };
    return {
      getData: getData,
      setData: setData
    };

    function getData() {
      return businessObject;
    }

    function setData(inputObject) {
      for (var key in inputObject) {
        if (inputObject.hasOwnProperty(key) && businessObject.hasOwnProperty(key)) {
          businessObject[key] = inputObject[key];
        }
      }
    }
  }
}());
