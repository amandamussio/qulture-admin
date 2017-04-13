angular.module('qulture').controller('CollaboratorsController', function($scope) {

	/* jshint validthis: true */
	var vm = this;

	//lista de colaboradores
	vm.collaborators = [
		{
			id: 1,
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
			],
			feedbacks: []
		},
		{
			id: 2,
			name: 'Francisco Mello',
	  		email: 'francisco@qulture.rocks',
	  		picture: 'assets/images/man-2.jpg',
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
			],
			feedbacks: [
				{
					message: 'Enviado feedback há 10 dias'
				}
			]
		},
		{
			id: 3,
			name: 'Gustavo Allioni',
			email: 'gustavo@qulture.rocks',
	  		picture: 'assets/images/man-3.jpg',
	  		status: true,
	  		logins: 10,
	  		manager: 'Francisco Mello',
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
			],
			feedbacks: [
				{
					message: 'Enviado feedback há 5 dias'
				}
			]
		},

	];

	//thema padrão ao carregar a página
	vm.changeTheme = 'default';

	//informação padrão ao carregar a página
	vm.changeViewInfo = 'team';

	vm.message='';

	//adiciona mensagem ao array de feedbacks do usuario;
	vm.addMessage = function(collaborator, message) {
		console.log(message)
		let index = vm.collaborators.findIndex((c) => c.id === collaborator.id);
		vm.collaborators[index].feedbacks.push({message: vm.message});
	}

	//filtro dos colaboradores
	vm.filterCollaborators = '';

});

