(function () {
    'use strict';
    
    function dirTestCtrl($scope,factory){
        
        $scope.directiveName = 'mjList Directive Demo';
        $scope.selectedObjs =[];
        
        
        
    }

    
    
    angular.module('dirTest')
        .controller('dirTestCtrl',dirTestCtrl);
    
    dirTestCtrl.$inject = ['$scope','factory'];

})();