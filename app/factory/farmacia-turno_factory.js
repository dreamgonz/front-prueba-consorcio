'use strict';

app.factory('farmaciaTurnoFactory', function($http) {

        var urlBaseConsulta = "https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones";
        var urlBaseConsulta2 = "http://localhost:8080/farmacia-turno/farmacias"
        var farmacias = {};
    

        farmacias.listarFarmacias = function() {
            var urlConsulta = urlBaseConsulta;

            var formData = new FormData();

            formData.append('reg_id', '7');
            
            var config = {
                method: 'POST',
                data: formData,
                url: urlConsulta,   
                headers: {
                    'Content-Type': undefined,
                    }
            };
            return $http(config);
        }

        farmacias.listarFarmaciasTurno = function(idComuna, nombreLocal) {
            var urlConsulta = urlBaseConsulta2;
            
            var config = {
                method: 'GET',
                params: {comunaId: idComuna, nombreLocal: nombreLocal},
                url: urlConsulta,   
                headers: {
                    'Content-Type': undefined,
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods': 'GET, POST'
                    }
            };
            return $http(config);
        }

        return farmacias;

});

