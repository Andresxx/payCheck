var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();


const { inicio } = require('../../Rutas/Empleado/empleado.routing');


let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Ruta Principal', function() {
    describe('Obtener Empleado function', function() {
        it('Should error out if no name provided ', function() {
            inicio(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});