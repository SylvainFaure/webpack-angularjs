export default function Router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'HomeController',
      controllerAs: 'vm',
      
    })
    .state('country', {
      url: "/country",
      templateUrl: "views/country.html",
      controller: 'CountryController',
      controllerAs: 'vm',
      
    })
  $urlRouterProvider.otherwise("/");
};
