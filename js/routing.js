(function () {
    app.config(function( $stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl:'template/home.html' ,
        controller:'homeController as home',
    })
    .state('result', {
        url:'/result',
        templateUrl:'template/result.html' ,
        controller:'resultController as result',
         params:{
             url: null
        }
    });
});
})();

