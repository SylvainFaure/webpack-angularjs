class CountryController {
  constructor($scope, Articles) {
    'ngInject';

    this.$scope     = $scope;
    this.Articles   = Articles;
    $scope.title = 'This is a test'
    Articles.getCountry().then(d => {
      $scope.country = d.data
    })
    $scope.actions = [
      {
        label : 'Title',
        icon: 'font'
      },
      {
        label : 'Paragraph',
        icon: 'align-center'
      },
      {
        label : 'Italic',
        icon: 'italic'
      },
      {
        label : 'Image',
        icon: 'image'
      },
      {
        label : 'Citation',
        icon: 'quote-right'
      },
    ]
  }
  
}

export default CountryController;