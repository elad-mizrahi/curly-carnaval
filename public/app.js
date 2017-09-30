(function() {
  'use strict';

  angular.module('appCreator', ['ui.router', 'ngFileUpload']).config(ConfigConfig);

  function ConfigConfig($stateProvider, $locationProvider) {
    $stateProvider
      .state('main page', {
        url: '',
        component: '',
        redirectTo: 'about us'
      })
      .state('about us', {
        url: '/about-us',
        component: 'aboutUs'
      })
      .state({
        name: 'images',
        url: '/images',
        component: 'images'
      })
      .state({
        name: 'opening hours',
        url: '/opening-hours',
        component: 'openingHours'
      });
  }
}());
