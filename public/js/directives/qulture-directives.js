angular.module('qultureDirectives',[])
.directive('collaboratorItem', function(){

	var ddo = {};

	//diretiva pode ser atributo ou elemento
	ddo.restrict = "AE";

	ddo.scope = {
		name:  '@',
		email: '@',
		picture: '@',
		manager: '@',
		logins: '@',
		status: '@'
	}


	ddo.transclude = true; //mostra elementos filhos no html que nao foram inclusos no template

	//carrega template html da diretiva
	ddo.templateUrl = 'js/directives/collaborator.html'

	return ddo;
})