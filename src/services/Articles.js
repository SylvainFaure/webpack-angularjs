export default class Articles {
  constructor(
    $http,
    $q
  ) {
    this.$http = $http;
    this.$q = $q;
  }
  getAllArticles() {
    let articles = {
      title: 'bouh',
      description: 'yo'
    }
    return articles
  }

  getCountry() {
    var deferred = this.$q.defer();
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        deferred.resolve(data);
      })
    return deferred.promise; 
  }
}

