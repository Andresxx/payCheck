import {fixedTimeEmployee} from "../Employee/Types/Fixed";

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Paycheck} from '../paycheck.js';
import {Employee} from "../Employee/Employee";
import {commissionEmployee} from "../Employee/Types/Commission";
import {partialTimeEmployee} from "../Employee/Types/Partial";


describe('paycheck', function() {
    
    let paycheck;

    beforeEach(function() {
        paycheck = new Paycheck();
     });
     
    it('La boleta de pago deberia estar vacio cuando es creado', function() {
        expect(paycheck.getAmount()).equal(0);
    });

    it('La boleta de pago deberia valer 50 cuando le asignamos 50', function() {
        paycheck.setAmount(50);
        expect(paycheck.getAmount()).equal(50);
    });

    it('El nombre del dueño de la boleta de pago deberia ser Waka cuando asignamos Waka', function() {
        paycheck.setEmployeeName("Waka");
        expect(paycheck.getEmployeeName()).equal("Waka");
    });

    it('El salario de un empleado fijo basico deberia ser de 4000', function(){
        let fixedEmployee = new fixedTimeEmployee("Dante", 80319, 4000);
        expect(fixedEmployee.calculatePayment()).equal(4000);
    });

    it('El salario de un empleado por comision con 50% de porcentaje, salario base de 1000 y una venta por 3000 deberia ser 2500', function(){
        let comEmployee = new commissionEmployee("nero", 65666, 1000, 0.5);
        comEmployee.addEmployeeSale("08-03-2019",3000)
        expect(comEmployee.calculatePayment()).equal(2500);
    });

    it('El salario de un empleado parcial 8 horas y cantidad de pago por horas de 600 deberia ser 4800', function(){
        let partEmployee = new partialTimeEmployee("Carlos", 455563, 600);
        partEmployee.addATimesheet("04-03-2019","8:00","16:00",8);
        expect(partEmployee.calculatePayment()).equal(4800);
    });


});
