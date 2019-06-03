var expect = require('chai').expect;

import {SindicatoConfederacionDelTrabajo} from "../src/ReglasDeNegocioEmpresariales/Entidades/Sindicatos/SindicatoConfederacionDelTrabajo";
import {SindicatoComisionesObreras} from "../src/ReglasDeNegocioEmpresariales/Entidades/Sindicatos/SindicatoComisionesObreras";

describe('Pruebas de notificacion', function() {

    beforeEach(function() {
     });

    it('El sindicato confederacion del trabajo te da beneficios de ese sindicato', function(){
        let sindicatoConfederacionDelTrabajo = new SindicatoConfederacionDelTrabajo();
        expect(sindicatoConfederacionDelTrabajo.beneficios()).equal("Este sindicato tiene los beneficios de Sindicato confederacion del trabajo.");
    });

    it('El sindicato comisiones obreras te da beneficios de ese sindicato', function(){
        let sindicatoComisionesObreras = new SindicatoComisionesObreras();
        expect(sindicatoComisionesObreras.beneficios()).equal("Este sindicato tiene los beneficios de Sindicato comisiones obreras.");
    });
});