// Define angularJS model
// Accepts module name and lists of module dependacies
var app1 = angular.module('app1', []);


app1.controller('ctrl1', function($scope) {
    $scope.numA = null;
    $scope.numB = null;

    $scope.updateValue = function() {
        $scope.sum = $scope.numA + ' + ' + $scope.numB + " = " + (+ $scope.numA + +$scope.numB)
    };
});


app1.controller('randCtrl', function($scope) {
    $scope.randNum = Math.floor((Math.random() * 10) + 1);

    $scope.updateRand = function() {
        $scope.randNum = Math.floor((Math.random() * 10) + 1);
    };
});

app1.controller('grocCtrl', function($scope) {
    $scope.grocList = []
    $scope.item = null;

});