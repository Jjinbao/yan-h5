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
            .otherwise({redirectTo:'/login'});
    })

    /*所有控制器的父控制器*/
    .controller('rootTabCtrl', ['$scope',function($scope) {
        /*$(document).ready(function(e) {
            var counter = 0;
            if (window.history && window.history.pushState) {
                $(window).on('popstate', function () {
                    window.history.pushState('forward', null, '#');
                    window.history.forward(1);
                    console.log('88888888888888888')
                    //alert("不可回退");
                });
            }

            window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
            window.history.forward(1);
        });*/
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



