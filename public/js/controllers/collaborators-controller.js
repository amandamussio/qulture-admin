angular.module('qulture').controller('CollaboratorsController', function($scope) {

	//$scope disponibiliza dados do controller para a view
	$scope.collaborators = [
		{
			name: 'Fred Castro',
	  		email: 'frederico@qulture.rocks',
	  		picture_url: "http://placehold.it/60x60",
	  		active: true,
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
	  		picture_url: "http://placehold.it/60x60",
	  		active: true,
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

	$scope.changeDataView = 'team';

	$scope.filterCollaboratorsStatus = '';
});