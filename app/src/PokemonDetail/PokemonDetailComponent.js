'use strict';

pokemonApp
    .service('pokemonDetail', function () { console.log('hello!'); })
    .component('pokemonDetail', { 

        controller: function($scope, $routeParams, PokemonsService) {

            this.pokemonLoaded = false;

            this.pokemon = PokemonsService.get({
                pokemonId: $routeParams['pokemonId']
            }, function(successResult) {

                console.log(successResult);
                // Окей!
                $scope.notfoundError = false;
                $scope.pokemonLoaded = true;

                $scope.activeTab = 1;
                $scope.disableControlTab = true;
            }, function(errorResult) {
                // // Не окей..
                $scope.notfoundError = true;
                $scope.pokemonLoaded = true;

            });

            this.pokemon.$promise.then(function(result) {
                //$scope.pokemonLoaded = true;
            });

            this.deletePokemon = function(pokemonId) {

                this.pokemon.$delete({
                    pokemonId: pokemonId
                }, function(successResult) {
                    // Окей!
                    $scope.deletionSuccess = true;
                }, function(errorResult) {
                    // Не окей..
                    $scope.deletionError = true;
                });

            }
        },

        templateUrl: './src/PokemonDetail/PokemonDetail.html' });