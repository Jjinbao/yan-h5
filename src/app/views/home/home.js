angular.module('app.home',[])
    .controller('swalkHome',['$scope','$http','$interval',function($scope,$http,$interval){
        $http({
            url:'http://172.16.0.92:3080/iyuba',
            method:'GET'
        }).success(function(data){
            console.log(data);
        })

    }])
