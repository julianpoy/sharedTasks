angular.module('starter.controllers')

.controller('ListsCtrl', function($scope, $state) {
  $scope.lists = [
    { title: 'Family Shopping', id: 1, people: {} },
    { title: 'School Project', id: 2, people: {} }
  ];

  $scope.openList = function(id){
    $state.go('app.list', {"listId": id});
  }
});
