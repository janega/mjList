(function () {
    'use strict';
    
    function dirTestCtrl($scope,factory){
        
        $scope.directiveName = 'mjList Directive Demo';
        $scope.selectedObjs =[];
        $scope.selectedObjs2 =[];
        $scope.selectedObjs3 =[];
        
        $scope.preSelectedItems = [
                                    {
                                    "pid": 393032,
                                    "pcode": 8767,
                                    "tsid": 1500241,
                                    "fn": "Fernando",
                                    "ln": "Abad",
                                    "fnu": "Fernando",
                                    "lnu": "Abad",
                                    "pn": "RP",
                                    "tid": 235,
                                    "htid": 236,
                                    "atid": 235,
                                    "htabbr": "Sea",
                                    "atabbr": "Oak",
                                    "posid": 123,
                                    "slo": null,
                                    "IsDisabledFromDrafting": false,
                                    "ExceptionalMessages": [],
                                    "s": 4000,
                                    "ppg": "2.1",
                                    "or": 29,
                                    "swp": false,
                                    "opn": "",
                                    "pp": 0,
                                    "i": "",
                                    "news": 0,
                                    "index": 412
                                    },
                                    {
                                    "pid": 491174,
                                    "pcode": 9540,
                                    "tsid": 1498648,
                                    "fn": "Jose",
                                    "ln": "Abreu",
                                    "fnu": "Jose",
                                    "lnu": "Abreu",
                                    "pn": "1B",
                                    "tid": 228,
                                    "htid": 228,
                                    "atid": 241,
                                    "htabbr": "CWS",
                                    "atabbr": "Cin",
                                    "posid": 16,
                                    "slo": null,
                                    "IsDisabledFromDrafting": false,
                                    "ExceptionalMessages": [],
                                    "s": 4800,
                                    "ppg": "8.5",
                                    "or": 14,
                                    "swp": false,
                                    "opn": "",
                                    "pp": 0,
                                    "i": "",
                                    "news": 2,
                                    "index": 185
                                    },
                                    {
                                    "pid": 500544,
                                    "pcode": 8648,
                                    "tsid": 1500241,
                                    "fn": "Dustin",
                                    "ln": "Ackley",
                                    "fnu": "Dustin",
                                    "lnu": "Ackley",
                                    "pn": "OF",
                                    "tid": 236,
                                    "htid": 236,
                                    "atid": 235,
                                    "htabbr": "Sea",
                                    "atabbr": "Oak",
                                    "posid": 35,
                                    "slo": null,
                                    "IsDisabledFromDrafting": false,
                                    "ExceptionalMessages": [],
                                    "s": 3100,
                                    "ppg": "3.5",
                                    "or": 8,
                                    "swp": false,
                                    "opn": "",
                                    "pp": 0,
                                    "i": "",
                                    "news": 2,
                                    "index": 679
                                    }
                                    ]
        
    }

    
    
    angular.module('dirTest')
        .controller('dirTestCtrl',dirTestCtrl);
    
    dirTestCtrl.$inject = ['$scope','factory'];

})();