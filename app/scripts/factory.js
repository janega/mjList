(function(){
    'use strict';
    function factory($http){
        
        var service ={};
        service.players =[];
        service.getPlayers = function(){

             return $http.get('data/data.json')
                        .success(function(data){
                            service.players = data.playerList;
                        })
                        .error(function(err){
                            //log to database but for now just log to console
                            console.log('Error occured while trying to get player data ' + err );
                        });       
                       
            
            
        };//end getPlayers
            
        
        return service; //returning service obj
    }
    
    
    angular.module('dirTest')
        .factory('factory',factory);
    
    factory.$inject = ['$http'];//safer for minification 
    
})();
