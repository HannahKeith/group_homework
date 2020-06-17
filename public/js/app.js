const app = angular.module('BirdApp', []);

app.controller('MainController', ['$http', function($http){
  this.createBird = {}
  this.birds = []
  this.bird = {}

  this.createBird = () => {
    $http({
      method: 'POST',
      url: '/birds',
      data: this.createForm
    }).then((response) => {
      console.log(this.birds);
      this.birds.unshift(response.data)
      this.createForm = {}
    }, (error) => {
      console.log(error);
    })
  }

  this.getBirds = () => {
    $http({
      method: 'GET',
      url: '/birds'
    }).then(response => {
      this.birds = response.data
    }, error => {
      console.log(error);
    })
  }

  this.getBirds()

  //delete function
  this.deleteBird = (id) => {
    $http({
      method: 'DELETE',
      url: '/birds/' + id
    }).then (response => {
      console.log("I'm deleting now...")

      const removeByIndex = this.birds.findIndex(bird => bird._id === id)
    this.birds.splice(removeByIndex, 1)
  }, error => {
      console.log(error)
    })
}










//ends main controller
}])
