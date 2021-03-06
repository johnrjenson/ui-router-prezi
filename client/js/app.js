angular.module('app', ['ui.router']);

/**
 * Routes
 */
angular.module('app').config(function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partials/Home.html'
	});
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'partials/About.html'
	});
	$stateProvider.state('contacts', {
		url: '/contacts',
		controller: 'ListContactsController',
		templateUrl: 'partials/Contacts.html'
	});
	$stateProvider.state('contacts.contactCard', {
		url: '/card/:contactId',
		controller: 'ContactCardController',
		templateUrl: 'partials/ContactCard.html'
	});
	$stateProvider.state('contactCard', {
		url: '/card/:contactId',
		controller: 'ContactCardController',
		templateUrl: 'partials/ContactCard.html'
	});
});

/**
 * Controllers
 */
angular.module('app')
	.controller('RootController', function($scope, $state, $stateParams) {
		$scope.$state = $state;
		$scope.$stateParams = $stateParams;
	});
angular.module('app')
	.controller('ListContactsController', function($scope, ContactService) {
		$scope.contacts = ContactService.getContacts();
	});
angular.module('app')
	.controller('ContactCardController', function($scope, $state, $stateParams, ContactService) {
		var contactId = $stateParams.contactId;
		if(!contactId) {
			$state.go('contacts.contactCard', {contactId: 1});
		} else {
			$scope.currentContact = ContactService.getContactById(contactId);
		}
	});

/**
 * Services
 */
angular.module('app')
	.factory('ContactService', function() {
		var service = {
			getContacts: function() {
				return [
					{
						contactId: 1,
						name: 'John',
						fullName: 'John Jenson',
						role: 'Developer',
						employer: 'Cengage'
					},
					{
						contactId: 2,
						name: 'Paul',
						fullName: 'Paul Barry',
						role: 'Developer',
						employer: 'Cengage'
					},
					{
						contactId: 3,
						name: 'Manoj',
						fullName: 'Manoj Singh',
						role: 'Developer',
						employer: 'Cengage'
					},
					{
						contactId: 4,
						name: 'Andrea',
						fullName: 'Andrea Jenkins',
						role: 'Developer',
						employer: 'Cengage'
					},
					{
						contactId: 5,
						name: 'Ben',
						fullName: 'Ben Babics',
						role: 'Developer',
						employer: 'Cengage'
					}
				];
			},
			getContactById: function(contactId) {
				return _.findWhere(service.getContacts(), {contactId: parseInt(contactId)});
			}
		};
		return service;
	});

