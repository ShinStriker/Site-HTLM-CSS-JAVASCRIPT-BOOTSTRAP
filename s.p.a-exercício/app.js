var app = angular.module('App' ["ngRout"]);

app.config(function($routeProvider){
    $routeProvider
   .when("/" , {
        templateUrl:"template/home.html"
   })
   .when("/pagina1" , {
    templateUrl:"template/home.html"
})
.when("/pagina2" , {
    templateUrl:"template/home.html"
})
.when("/pagina3" , {
    templateUrl:"template/home.html"
})

.otherwise({redirectTo:'/'})
})