angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            $http.defaults.headers['application-id'] = "3BAA6A88-43D6-3625-FF64-FCAB5D47EA00";
            $http.defaults.headers['secret-key'] = "1B17B772-9B55-B91D-FFCF-94E535893600";


            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        // headers: {
                        //     "application-id": "3BAA6A88-43D6-3625-FF64-FCAB5D47EA00",
                        //     "secret-key": "1B17B772-9B55-B91D-FFCF-94E535893600"

                        // },
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        // headers: {
                        //     "application-id": "3BAA6A88-43D6-3625-FF64-FCAB5D47EA00",
                        //     "secret-key": "1B17B772-9B55-B91D-FFCF-94E535893600"

                        // }
                    });
                },
                updatePokemon: function(pokemonId) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                }

            }

        }

    );
