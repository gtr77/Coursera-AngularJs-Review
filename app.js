(function(){
    'use strict';

    angular
        .module('firstApp', [])
        .controller('mainController', initFunction)
    
    /** @ngInject */
    function initFunction($scope){

        /**
         * Initial State for Dishes
         */
        $scope.dishesValues = "";

        $scope.message = "";

        $scope.alertTypes = {};
        var alertType = $scope.alertTypes;

        alertType = {
            success : "success",
            danger : "danger",
            warning : "warning" 
        }
        
        $scope.alertStyleType = "";

        $scope.checkQuantityOfDishes = function() {
            var dishesValues = $scope.dishesValues;
            var dishes = dishesValues.split(",");
            if ( !dishesValues ){
                $scope.message = "Please enter data first";
                $scope.alertStyleType = alertType.warning; 
            } else if( dishes.length <= 3 ) {
                $scope.message = "Enjoy!";
                $scope.alertStyleType = alertType.success; 
            } else {
                $scope.message = "Too much!";
                $scope.alertStyleType = alertType.danger; 
            }
        }
    }

}());