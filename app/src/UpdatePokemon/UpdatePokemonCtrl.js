'use strict';

pokemonApp.controller('UpdatePokemonCtrl', function($scope, $routeParams, PokemonsService) {

	$scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
    });



    $scope.updatePokemon = function(pokemonId) {

        $scope.updateError = false;
        $scope.updateSuccess = false;

        PokemonsService.updatePokemon(pokemonId).then(function successCallback(response) {

            // Окей!
            $scope.updateSuccess = true;

        }, function errorCallback(response) {

            // Не окей..
            $scope.updateError = true;
        });

    }

});
