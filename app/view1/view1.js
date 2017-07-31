angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['$scope','$http','$rootScope','$timeout','$window',function($scope, $http, $rootScope,$timeout,$window){
        $scope.onSubmit = function() {
            var hrefUrl = '#!/view2'
            $window.location.replace(hrefUrl);
            return;
        };
}]);