var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from "../Employee/Empleado";
import {CalculadoraEmpleadoComision} from "../Calculator/CalculadoraEmpleadoComision";
import {CalculadoraEmpleadoFijo} from "../Calculator/CalculadoraEmpleadoFijo";
import {CalculadoraEmpleadoParcial} from "../Calculator/CalculadoraEmpleadoParcial";

describe('paycheck', function() {

    beforeEach(function() {
     });

    it('El salario de un empleado fijo basico deberia ser de 4200', function(){
        let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(4200);
        let empleadoFijo = new Empleado('Carlos',420, calculadoraDeEmpleadoFijo);
        expect(empleadoFijo.calcularSalario()).equal(4200);
    });

    it('El salario de un empleado por comision con 50% de porcentaje, salario base de 1000 y una venta por 3000 deberia ser 2500', function(){
        let calculadoraEmpleadoPorComision = new CalculadoraEmpleadoComision(1000, 0.5);
        calculadoraEmpleadoPorComision.agregarVenta('el 5 xdxd',3000)
        let empleadoComision = new Empleado('Andres',69, calculadoraEmpleadoPorComision);
        expect(empleadoComision.calcularSalario()).equal(2500);
    });

    it('El salario de un empleado parcial 8 horas y cantidad de pago por horas de 600 deberia ser 4800', function(){
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(600);
        calculadoraEmpleadoTiempoParcial.agregarHojaDeTiempo('08-03-2019', '08:00', '17:00', 8)
        let empleadoPorTiempoParcial = new Empleado('Harold',666, calculadoraEmpleadoTiempoParcial);
        expect(empleadoPorTiempoParcial.calcularSalario()).equal(4800);
    });


});
