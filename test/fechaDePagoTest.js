var expect = require('chai').expect;
import {ClasificadorMensual} from "../src/ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorMensual";
import {ClasificadorSemanal} from "../src/ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorSemanal";
describe('Caculo de las fachas de pago', function() {
    
    it('Si es el ultimo dia del mes tendria que retornar verdad si es un empleado fijo de lo contrario falso', function(){
        let clasificadorMensual = new ClasificadorMensual();
        let fechaActual = new Date();
        let ultimDiaMes = new Date(fechaActual.getFullYear(),fechaActual.getMonth(),0);
        if(fechaActual == ultimDiaMes)
            expect(clasificadorMensual.esFechaDePago()).equal(true);
        else
            expect(clasificadorMensual.esFechaDePago()).equal(false);
    });
    it('Si es viernes tendria que retornar verdad si es un empleado parcial de lo contrario falso', function(){
        let clasificadorSemanal = new ClasificadorSemanal();
        let fechaActual = new Date();
        if(fechaActual.getDay() == 5)
            expect(clasificadorSemanal.esFechaDePago()).equal(true);
        else
            expect(clasificadorSemanal.esFechaDePago()).equal(false);
    });

});