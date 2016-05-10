var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
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
  .state('home.paragraph', {
    url: '/paragraph',
    templateUrl: 'partial-about-scotch.html'
  })
}); 
