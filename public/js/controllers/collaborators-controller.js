angular.module('qulture').controller('CollaboratorsController', function($scope) {

	//$scope disponibiliza dados do controller para a view
	$scope.collaborators = [
		{
			name: 'Fred Castro',
	  		email: 'frederico@qulture.rocks',
	  		picture: 'assets/images/man.jpg',
	  		status: true,
	  		logins: 33,
	  		manager: 'Ricardo',
	  		tags: [
				{
				   name: 'Engenharia'
				},
				{ 
				   name: 'Marketing'
				},
				{
				  name: 'São Paulo'
				}
			],
			teams: [
				{
				  name: 'Squad Mobile'
				}
			]
		},
		{
			name: 'Francisco Mello',
	  		email: 'francisco@qulture.rocks',
	  		picture: 'assets/images/man.jpg',
	  		status: false,
	  		logins: 33,
	  		manager: 'Ricardo',
	  		tags: [
				{
				   name: 'Engenharia'
				},
				{ 
				   name: 'Marketing'
				},
				{
				  name: 'São Paulo'
				}
			],
			teams: [
				{
				  name: 'Squad Mobile'
				}
			]
		},

	];

	$scope.changeTheme = 'default';

	$scope.changeViewInfo = 'team';

	$scope.message = [];

	$scope.addMessage = function(message) {
		$scope.message.push(message);
	}

	$scope.filterCollaborators = '';

});