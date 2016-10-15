(function () {
  app.service('UrlService', function($resource, $http){
  this.URL_shorten = function(url){
    var result;
    
    var api = $resource('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDarxUddEa2mljocCrYhxaBqMFIqBbOQFQ');
    var apidata = api.save({longUrl:url});
    
    console.log(apidata);
    
    return apidata;
    
    
  }
});
})();

