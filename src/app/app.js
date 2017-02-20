'use strict'

angular.module('swalk', ['ngRoute','app.home','app.login'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home',{
                controller:'swalkHome',
                templateUrl:'../app/views/home/home.html'
            })
            .when('/login',{
                controller:'appLogin',
                templateUrl:'../app/views/login/login.tpl.html'
            })
            .when('/register',{
                controller:'appRegister',
                templateUrl:'../app/views/login/register.tpl.html'
            })
            .otherwise({redirectTo:'/home'});
    })

    /*所有控制器的父控制器*/
    .controller('rootTabCtrl', ['$scope',function($scope) {

    }])

    //隐藏底部导航栏
    .directive('hideTabs', function($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                scope.$on('$ionicView.beforeEnter', function() {
                    scope.$watch(attributes.hideTabs, function(value) {
                        $rootScope.hideTabs = value;
                    });
                });

                scope.$on('$ionicView.beforeLeave', function() {
                    $rootScope.hideTabs = false;
                });
            }
        };
    });



