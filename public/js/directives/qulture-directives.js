angular.module('qultureDirectives',[])
.directive('collaboratorItem', function(){

	var ddo = {};

	//diretiva pode ser atributo ou elemento
	ddo.restrict = "AE";

	ddo.scope = {
		name:  '@name',
		email: '@',
		photo: '@picture_url',
		manager: '@',
		logins: '@'
	}


	ddo.transclude = true; //mostra elementos filhos no html que nao foram inclusos no template

	//carrega template html da diretiva
	ddo.templateUrl = 'js/directives/collaborator.html'

	return ddo;
})