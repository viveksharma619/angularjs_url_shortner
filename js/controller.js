(function () {
    app.controller("homeController",['$scope','$state', function ($scope, $state) {
    var home = this;
    
    home.url = "http://rentomojo.com";
    home.shorten = function(){
      console.log(home.url);
      $state.go('result',{ url: home.url });
    }
  
}]);


app.controller("resultController",['$scope', 'UrlService', '$sce', '$state', '$stateParams', function ($scope, UrlService, $sce, $state, $stateParams) {
  
  var result = this;
  result.url = $stateParams.url;
  
  //calling the service    
  result.data =  UrlService.URL_shorten(result.url);
  
}]);

})();

