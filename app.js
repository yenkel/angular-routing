// app.js
var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })
  .state('home.list', {
    url: '/list',
    templateUrl: 'partial-home-list.html',
    controller: function($scope) {
      $scope.scotches = ['Balvenie', 'The Balmore', 'Highland Park'];
    }
  })
  .state('scotch', {
    url: '/scotch/:scotch',
    templateUrl: function ($stateParams){
      console.log($stateParams)
      return 'partial-scotch-' + $stateParams.scotch + '.html';
    }
  })
  .state('home.paragraph', {
    url: '/paragraph',
    templateUrl: 'partial-about-scotch.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'partial-about.html'
  });
});