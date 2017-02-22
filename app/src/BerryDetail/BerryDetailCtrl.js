'use strict';

pokemonApp.controller('BerryDetailCtrl', function($scope, $routeParams, BerriesService) {

    $scope.berryLoaded = false;

    BerriesService.getBerry($routeParams['berryId']).then(function(response) {
        $scope.berry = response.data;
        $scope.berryLoaded = true;
        console.log($scope.berry)
    });

});
