class HomeController {
  constructor($scope, Articles) {
    'ngInject';

    this.$scope     = $scope;
    this.Articles   = Articles;
    $scope.title = 'This is a test'
    $scope.articles = Articles.getAllArticles()
  }

  /*getAllArticles() {
    return this.Articles.getAllArticles(); 
  }*/
  
}

export default HomeController;