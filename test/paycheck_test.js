var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Employee} from "../Employee/Employee";
import {CommissionCalculator} from "../Calculator/CommissionCalculator";
import {FixedCalculator} from "../Calculator/FixedCalculator";
import {PartialCalculator} from "../Calculator/PartialCalculator";

describe('paycheck', function() {

    beforeEach(function() {
     });

    it('El salario de un empleado fijo basico deberia ser de 4200', function(){
        let fixedCalculator = new FixedCalculator(4200);
        let fixedEmployee = new Employee('Carlos',420, fixedCalculator);
        expect(fixedEmployee.calcularSalario()).equal(4200);
    });

    it('El salario de un empleado por comision con 50% de porcentaje, salario base de 1000 y una venta por 3000 deberia ser 2500', function(){
        let commissionCalculator = new CommissionCalculator(1000, 0.5);
        commissionCalculator.agregarVenta('el 5 xdxd',3000)
        let fixedEmployee = new Employee('Andres',69, commissionCalculator);
        expect(fixedEmployee.calcularSalario()).equal(2500);
    });

    it('El salario de un empleado parcial 8 horas y cantidad de pago por horas de 600 deberia ser 4800', function(){
        let partialCalculator = new PartialCalculator(600);
        partialCalculator.agregarHojaDeTiempo('08-03-2019', '08:00', '17:00', 8)
        let fixedEmployee = new Employee('Harold',666, partialCalculator);
        expect(fixedEmployee.calcularSalario()).equal(4800);
    });


});
