(function () {
    'use strict';
    
    function dirTestCtrl($scope,factory){
        
        $scope.test = 'Hello Mike';
        
        
        
    }

    
    
    angular.module('dirTest')
        .controller('dirTestCtrl',dirTestCtrl);
    
    dirTestCtrl.$inject = ['$scope','factory'];

})();