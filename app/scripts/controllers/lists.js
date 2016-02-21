angular.module('starter.controllers')

.controller('ListsCtrl', function($scope) {
  $scope.lists = [
    { title: 'Family Shopping', id: 1, people: {} },
    { title: 'School Project', id: 2, people: {} }
  ];
});
