angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {

            return {

                getBerries: function() {
                    return $http.get('http://pokeapi.co/api/v2/berry/?limit=10');
                },

                getBerry: function(BerryId) {
                    return $http.get('http://pokeapi.co/api/v2/berry/' + berryId);
                }
            }

        }

    );
