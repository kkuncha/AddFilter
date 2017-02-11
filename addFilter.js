

var app = angular.module('myapp',[]);

	app.controller('CollapseDemoCtrl', function ($scope,$http,$filter) {

		$scope.columns=['Account Number','AccountId','Account Name','CardHolder Account ID','FirstName','LastName'];
		$scope.savedFilter=['Account Number','AccountId','LastName'];	
	
	/*Defines Predicates for OrderBy*/
	$scope.predicate='filterName';
	$scope.predicateCol='colName';
	var counter;

	/*Reads Saved Filter*/
	//$http.get('filters.json').success(function(response)
		//{
		//		$scope.savedFilter=response.records;
				counter=$scope.savedFilter.length;
	//	}); 	
		
	/*Reads Coloumns NAmes
	 $scope.columns = [
	{
	colName:'Account Number'
	},	
	{
	colName:'AccountId'
	},
	{
	colName:'LastName'
	},	
	{
	colName:'CardHolder Account ID'
	},
	{
	colName:'Account Name'
	},
	{
	colName:'FirstName'
	}
	];*/
	
	 //$scope.tempVal = '';
	 /*Adds new Item*/
    $scope.newItem = function($event,index){

		$scope.temp = _.difference($scope.columns, $scope.savedFilter);
		console.log($scope.temp);
        
		//counter++;			
		$scope.savedFilter.push(  $scope.temp[0]  );
        $event.preventDefault();		
		
		console.log('-----------Number of Filters--------------'+counter  );   
		console.log('Selected Array is :' + $scope.selected);
		console.log('Selected Array element is :' + $scope.selected[index]);    
		console.log('Added element element is :' + $scope.temp[0]);		  
		
    }   
    
	/*Removes Item*/		
	$scope.removeItem=function(i)
	{	
		//$scope.savedFilter.pop(  { id:counter} );
		$scope.savedFilter.splice( i,1 );
		//counter--;		
		console.log('-----------Number of Filters--------------'+counter);	
	
		//Removes from selected Array
		$scope.selected.splice(i,1);	
	}
	
	
	/*Updates Selected Filter*/
	$scope.update= function(index)	{	
		
		//$scope.columns[index].colName=$scope.savedFilter[index].filterName;
		$scope.savedFilter[index]=$scope.selected[index];
		
		console.log('Array is :'+$scope.selected);
		console.log('Selected Array element is :' + $scope.selected[index]);
		console.log('updated on index :'+index);
	}
	
	/*Saves Updated Filter List*/
	$scope.saveFilter=function()
	{
		$http.post('filters.json', $scope.savedFilter).then(function(data)
		{
			console.log('DATAsaved');
		});	
	$scope.msg = 'Data SENT: '+ JSON.stringify($scope.savedFilter);	
	}	
	});	


	app.filter('customFilter', function(filterFilter) {
	return function(input,filterEach,exclude) {
		filterEach.forEach(function(item) {
		if (angular.equals(item, exclude)) { return; }
		//if (item === exclude) { return; }
		input = filterFilter(input, '!'+item);
		});
	//console
        
	
    return input;
	};  
});



			
