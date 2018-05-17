// Define angularJS model
// Accepts module name and lists of module dependacies
var app1 = angular.module('app1', []);


app1.controller('ctrl1', function($scope) {
    $scope.numA = 1;
    $scope.numB = 1;

    $scope.updateValue = function() {
        $scope.sum = $scope.numA + ' + ' + $scope.numB + " = " + (+ $scope.numA + +$scope.numB)
    };
});