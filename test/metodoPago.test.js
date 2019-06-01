var expect = require('chai').expect;
import {Deposito} from '../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Deposito'
import {Efectivo} from '../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Efectivo'
import {Cheque} from "../src/ReglasDeNegocioEmpresariales/Entidades/MetodoDePago/Cheque";


describe('Pruebas del metodo de pago', function() {

    beforeEach(function() {
     });

     it('Si se elige cheque como metodo de pago tendria que devolver Cheque', function(){
        let cheque = new Cheque();
        expect(cheque.obtenerPago()).equal('Cheque');
    });
    it('Si se elige Deposito como metodo de pago tendria que devolver Deposito', function(){
        let deposito = new Deposito();
        expect(deposito.obtenerPago()).equal('Deposito');
    });it('Si se elige Efectivo como metodo de pago tendria que devolver Efectivo', function(){
        let efectivo = new Efectivo();
        expect(efectivo.obtenerPago()).equal('Efectivo');
    });
});