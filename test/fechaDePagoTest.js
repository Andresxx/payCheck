var expect = require('chai').expect;
import {FechaDePagoFijo} from "../src/Fecha de pago/FechaDePagoFijo";
import {FechaDePagoPorHora} from "../src/Fecha de pago/FechaDePagoPorHora";
describe('Caculo de las fachas de pago', function() {
    
    it('Si es el ultimo dia del mes tendria que retornar verdad si es un empleado fijo de lo contrario falso', function(){
        let fechaDePagoFijo = new FechaDePagoFijo();
        let fechaActual = new Date();
        let ultimDiaMes = new Date(fechaActual.getFullYear(),fechaActual.getMonth(),0);
        if(fechaActual == ultimDiaMes)
            expect(fechaDePagoFijo.esFechaDePago()).equal(true);
        else
            expect(fechaDePagoFijo.esFechaDePago()).equal(false);
    });
    it('Si es viernes tendria que retornar verdad si es un empleado parcial de lo contrario falso', function(){
        let fechaDePagoPorHora = new FechaDePagoPorHora();
        let fechaActual = new Date();
        if(fechaActual.getDay() == 5)
            expect(fechaDePagoPorHora.esFechaDePago()).equal(true);
        else
            expect(fechaDePagoPorHora.esFechaDePago()).equal(false);
    });

});