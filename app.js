var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })
  .state('home.list', {
    url: '/list',
    templateUrl: 'partial-home-list.html'
  })
}); 