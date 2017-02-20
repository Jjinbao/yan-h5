'use strict'

angular.module('app.router',[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/modules/tabs/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "app/modules/home/home.html",
                        controller: 'homeCtrl',
                        controllerAs: 'homeObj'
                    }
                }
            })
        $urlRouterProvider.otherwise("/tab/home");
    })
