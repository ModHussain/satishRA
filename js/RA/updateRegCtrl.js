resourceApp.controller('updateRACtrl',['$scope','$state','$stateParams','RAService',function($scope,$state,$stateParams,RAService){
	$scope.$on('$viewContentLoaded', function () {
			$scope.getRegister();
			$scope.registration = {};
	})
	$scope.companytype = ["Public Limited Company","Private Limited Company","Partnership","Proprietory"];
	$scope.quality = ["ISO 9001","ISO 9002","ISO I400","NONE"];
	
	$scope.registrationtype = ["RA","vendor","customer"];


			$scope.Licences = [ '1', '2', '3', '4', '5' ];
			$scope.Period = [ '1', '2', '3', '4', '5' ]
			$scope.getRegister = function() {
				RAService.getRegistrationById($stateParams.userId).then(
						function(data) {
							$scope.registration = data;
							console.log($scope.registration);
							$scope.registration.registrationType = $scope.registration.registrationType.split(',');
						}, function(err) {
							if (err) {
								$scope.errorMessage = err;
							}
						})
			}

			$scope.updateRegister = function() {
				debugger;
				$scope.registration.registrationType = $scope.registration.registrationType.toString();
				RAService.updateRegistration($scope.registration).then(
						function(response) {
							console.log('data submitted successfully');
							$state.go('RA.RAlist');
						}, function(err) {
							if (err) {
								$scope.errorMessage = err;
							}
						})
			}

		
		}])
