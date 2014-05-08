angular.module('app', ['ngRoute']);

/**
 * Routes
 */
angular.module('app').config(function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
	$routeProvider.when('/home', {
		templateUrl: 'partials/Home.html'
	});
	$routeProvider.when('/about', {
		templateUrl: 'partials/About.html'
	});
	$routeProvider.when('/contacts', {
		controller: 'ListContactsController',
		templateUrl: 'partials/Contacts.html'
	});
});

/**
 * Controllers
 */
angular.module('app')
	.controller('RootController', function($scope, $location) {
		$scope.$location = $location;
	});
angular.module('app')
	.controller('ListContactsController', function($scope, ContactService) {
		$scope.contacts = ContactService.getContacts();

		$scope.currentContact = ContactService.getContactById(1);

		$scope.loadContact = function(contactId) {
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
				return _.findWhere(service.getContacts(), {contactId: contactId});
			}
		};
		return service;
	});

