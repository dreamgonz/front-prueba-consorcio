'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', ['$scope',
 'farmaciaTurnoFactory',
 '$sce', 
 function($scope, farmaciaTurnoFactory, $sce) {

    // Obtenemos las comunas de la region metropolitana
    farmaciaTurnoFactory.listarFarmacias().then(function(resp){
      
      $scope.farmacias = $sce.trustAsHtml('<select ng-model="modelo" ng-change="obtenerFarmaciasTurno()" class="form-control" id="farmaciasTurno">' + resp.data + '</select>');
      console.log($scope.farmacias);
    });

    $scope.obtenerFarmaciasTurno = function (idComuna, nombreLocal) {
      console.log("estoy");
      idComuna = 8;
      nombreLocal = "SOLUFAR";
      farmaciaTurnoFactory.listarFarmaciasTurno(idComuna,nombreLocal).then(function(resp){
        console.log(resp);
      });

    };



}]);