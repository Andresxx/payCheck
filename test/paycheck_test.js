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
});
