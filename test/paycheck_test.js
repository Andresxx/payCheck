var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Paycheck} from '../paycheck.js';

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
});
