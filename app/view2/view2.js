angular.module('myApp.view2', ['ngRoute'])
.controller('View2Ctrl',['$scope','$http','$rootScope','$timeout',function($scope, $http, $rootScope,$timeout){
        $scope.welcomeText = 'Welcome Board';
        $scope.welcomeTextArray = ["Welcome to F1 Task Manager!","... any kind of hyperlink","... or checklist"];
        $scope.intermediateTextArray = ["Invite your team to this Board using the Add Members button","Use color codes labels for organization","Make as many list as you need"];
        $scope.advancedTextArray = ["Use as many boards as you want","Want tips Usage Examples, or API info?"];
        $scope.editText = false;
        $scope.textArea = '';
        $scope.displayAdd = true;
        $scope.changeText = function(){
            $scope.welcomeText = $('#welcome_text').val();
        };
        $scope.editText = function(textType,index) {
            document.getElementById(textType+'_'+index).style.display = 'block';
            if(textType == 'welcometext') {
                $scope.textArea = $scope.welcomeTextArray[index];
            } else if(textType == 'intermediatetext'){
                $scope.textArea = $scope.intermediateTextArray[index];
            } else {
                $scope.textArea = $scope.advancedTextArray[index];
            }
        };
        $scope.saveText = function(textType,index) {
            if(textType == 'welcometext') {
                $scope.welcomeTextArray[index] = $scope.textArea;
            } else if(textType == 'intermediatetext'){
                $scope.intermediateTextArray[index] = $scope.textArea;
            } else {
                $scope.advancedTextArray[index] = $scope.textArea;
            }
            document.getElementById(textType+'_'+index).style.display = 'none';
        };
        $scope.displayAddCard = function() {
            $scope.displayAdd = false;
        }
}]);