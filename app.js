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

        $scope.checkQuantityOfDishes = function() {
            var dishesValues = $scope.dishesValues;
            var dishes = dishesValues.split(",");
            if ( !dishesValues ){
                $scope.message = "Please enter data first";
            } else if( dishes.length <= 3 ) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }

}());