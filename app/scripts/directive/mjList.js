(function () {

    'use strict';
           

 
	
var mjList = function ($injector){

	return{
		//scope: {}, //pass in enmpty true object 1+1 also works
		restrict: 'E',
		scope:{
			//array: '=array',//= binding is both ways
			title: '@?',			
			labeldisabled: '@?',
			showheader: '@?',
			searchplaceholder: '@',
			order: '@',//
			setselection: '=?',//pre selecting items
			removeitems: '@?',
			type: '@',//s=single,m=multi select
			selecttype: '@',//select or link
			displayproperty: '@?', //name of property rendered in list items
			icon: '=?',//true or false show icon in upper right hand
			iconame: '@?',//class name for icon --font awesome or bootstrap3 support
			ulcssclass: '@?',//class the <ul> will take
			//loading: '@',
			factoryname: '@',//name or factory service
			factoryget:'@',//name of method to get containg data
			factoryarr:'@',//name of array returned from service containing data
			selectedobj: '=',//passed in from parent scope will hold selected objects
			paginationid:'@?'
			
		},
		transclude: true,
		require: 'dir-paginate',
		controller: function($scope){
			
		//set defaults
			if(!angular.isDefined($scope.icon)){ $scope.icon=false;  }
			if(!angular.isDefined($scope.showheader)){ $scope.showheader=false;  }
			if(!angular.isDefined($scope.ulcssclass)){ $scope.ulcssclass='panel-scroll';  }
			if(!angular.isDefined($scope.removeitems)){ $scope.removeitems=false;  }
			if(!angular.isDefined($scope.displayproperty)){ $scope.displayproperty='name';  }
			if(!angular.isDefined($scope.labeldisabled)){ $scope.labeldisabled=false;  }
			if(!angular.isDefined($scope.paginationid)){ $scope.paginationid='id';  }
			
			//if(!angular.isDefined($scope.title)){ $scope.title="";  }
			
		//vars	
			$scope.loading = true;
			$scope.directiveErr=false;
			$scope.array=[];
			$scope.selected=[];	
			$scope.searchText ='';
			
		//injecting factory service and setting instance
			var factoryInstance = $injector.get($scope.factoryname);


		    $scope.select = function(item){
		    	if($scope.type ==='s'){
		    		$scope.selected.pop();//remove previous selection
		    		$scope.selected.push(item.index);
					//if(angular.isDefined(selClientObj)){
						$scope.selectedobj.pop();
		    	    	$scope.selectedobj.push(item);	
					//}
					
		    	}//single select m multi select
		    	else if($scope.type ==='m'){
					var foundPosition = $scope.selected.indexOf(item.index); 
					if(foundPosition === -1){//it was not found
						$scope.selected.push(item.index);
					 	$scope.selectedobj.push(item);
					}
					else{
						$scope.selected.splice(foundPosition,1);
					 	$scope.selectedobj.splice(foundPosition,1);						
				    }
		    	}
		    	else{
		    		//throw toaster error
		    	}
		    };		

		    function onActivation(){
				if($scope.type==='s' || $scope.type==='m' ){
					factoryInstance[$scope.factoryget]()
						.then(function ()
						{
							$scope.array = factoryInstance[$scope.factoryarr];
							// removeNulls();
							// $scope.array.sort(compare);
													
							if(($scope.removeitems) === "true"){								
									removeItems();								
							}
							
							 angular.forEach($scope.array, function (item, key) {
							 	if(angular.isDefined(item[$scope.displayproperty]) && item[$scope.displayproperty]!==null ){
									item.index=key;//assign index to items in array
									if(angular.isDefined($scope.setselection) && $scope.setselection.length === 1){//single
										if(item.id === $scope.setselection[0].id){										
											$scope.selected.push(key);//set selected item index
											$scope.selectedobj.push(item);//store select item object
										}
									}
									else if(angular.isDefined($scope.setselection) && $scope.setselection.length >=1){//multi
										angular.forEach($scope.setselection,function(i,k){
											if(item.id === i.id){										
												$scope.selected.push(key);//set selected item index
												$scope.selectedobj.push(item);//store select item object
											}
										});//end second for loop									
									}
									else{}//no selection 
								}
								else{
									$scope.array.pop(item);//popping null displayproperty vals off the array
								}
							 });//end forEach
							$scope.array.sort(compare);
							$scope.loading = false;
						});//end service call get
				}		
				else{//error 
					$scope.directiveErr=true;
					console.log("error type attribute is not defined or a value other than 's' or 'm'");
				}


			}//end onActivation

			function compare(a,b) {
				if(a[$scope.displayproperty] !== null && b[$scope.displayproperty] !== null ){
				  if (a[$scope.displayproperty].toLowerCase() < b[$scope.displayproperty].toLowerCase())
				    return -1;
				  if (a[$scope.displayproperty].toLowerCase() > b[$scope.displayproperty].toLowerCase())
				    return 1;
				  return 0;
				}
				else{
					return 0;
				}
			}			

			function removeItems()
        	{   
              if(angular.isDefined($scope.array)){    
               var newMembers=[];
                 angular.forEach($scope.array, function (item, key) {
                    var exists = arrayObjectIndexOf($scope.setselection,item.id,'id');
                    if (exists === -1)
                    {
                        newMembers.push(item);
                    }
                });
                $scope.array = newMembers;
              }
			}
				
			function arrayObjectIndexOf(myArray, searchTerm, property) {
				for(var i = 0, len = myArray.length; i < len; i++) {
					if (myArray[i][property] === searchTerm) return i;
				}
					return -1;
        	}	
			

			onActivation();
			
		},		
		templateUrl: 'scripts/directive/mjListTemplate.html'

	};//end return





	};
        
        
    
angular.module('dirTest')
	.directive('mjList',mjList);
    
    mjList.$inject = ['$injector'];
    
    
})();