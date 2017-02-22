'use strict';

berryApp.controller('BerryListCtrl', function($scope, BerriesService) {

    $scope.berries = BerriesService.query();

});
