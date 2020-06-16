const app = angular.module('BirdApp', []);

app.controller('MainController', ['$http', function($http){
  this.createBird = {}
  this.birds = []
  this.bird = {}

  this.createBird = () => {
    $http({
      method: 'POST',
      url: '/',
      data: this.createForm
    }).then((response) => {
      this.createForm = {},
      this.birds.unshift(response.data)
    }, (error) => {
      console.log(error);
    })
  }

  this.getBirds = () => {
    $http({
      method: 'GET',
      url: '/'
    }).then(response => {
      this.birds = response.data
    }, error => {
      console.log(error);
    })
  }

  this.getBirds()

}])
