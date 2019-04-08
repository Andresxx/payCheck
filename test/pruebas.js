import {Ventas} from "../Calculadoras/Ventas.js";

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from "../Empleado/Empleado";
import {CalculadoraEmpleadoComision} from "../Calculadoras/CalculadoraEmpleadoComision";
import {CalculadoraEmpleadoFijo} from "../Calculadoras/CalculadoraEmpleadoFijo";
import {CalculadoraEmpleadoParcial} from "../Calculadoras/CalculadoraEmpleadoParcial";
import {Asistencias} from "../Calculadoras/Asistencias";
import {Empresa} from "../Empresa/Empresa";

describe('paycheck', function() {

    beforeEach(function() {
     });

    it('El salario de un empleado fijo basico deberia ser de 4200', function(){
        let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(4200);
        let empleadoFijo = new Empleado('Carlos',420, calculadoraDeEmpleadoFijo);
        expect(empleadoFijo.calcularSalario()).equal(4200);
    });

    it('El salario de un empleado por comision con 50% de porcentaje, salario base de 1000 y una venta por 3000 deberia ser 2500', function(){
        let ventasEmpleado = new Ventas();
        ventasEmpleado.agregarVenta('el 5 xdxd',3000);
        let calculadoraEmpleadoPorComision = new CalculadoraEmpleadoComision(1000, 0.5, ventasEmpleado);
        let empleadoComision = new Empleado('Andres',69, calculadoraEmpleadoPorComision);
        expect(empleadoComision.calcularSalario()).equal(2500);
    });

    it('El salario de un empleado parcial 8 horas y cantidad de pago por horas de 600 deberia ser 4800', function(){
        let tarjetasDeAsistencia = new Asistencias();
        tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(600, tarjetasDeAsistencia);
        let empleadoPorTiempoParcial = new Empleado('Harold',666, calculadoraEmpleadoTiempoParcial);
        expect(empleadoPorTiempoParcial.calcularSalario()).equal(4800);
    });

    it('Una empresa recien creada deberia tener 0 empleados', function(){
        let kSoft = new Empresa();
        expect(kSoft.obtenerListaDeEmpleados().length).equal(0);
    });

    it('Si la empresa contrata un empleado fijo, la cantidad de empleados que tiene deberia ser 1', function(){
        let kSoft = new Empresa();
        let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(4200);
        let empleadoFijo = new Empleado('Carlos',420, calculadoraDeEmpleadoFijo);
        kSoft.agregarEmpleado(empleadoFijo);
        expect(kSoft.obtenerListaDeEmpleados().length).equal(1);
    });

    it('La empresa debe generar la boleta de pago de un empleado de salario fijo', function() {
        let kSoft = new Empresa();
        let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(4200);
        let empleadoFijo = new Empleado('Harold',420, calculadoraDeEmpleadoFijo);
        kSoft.agregarEmpleado(empleadoFijo);
        expect(kSoft.generarBoletaDePago(empleadoFijo))
        .equal("BOLETA DE PAGO\nNombre: Harold\nCI: 420\nSalario: 4200\n");
    })

    it('La empresa debe generar la boleta de pago de un empleado de tiempo parcial', function() {
        let kSoft = new Empresa();
        let tarjetasDeAsistencia = new Asistencias();
        tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(600, tarjetasDeAsistencia);
        let empleadoPorTiempoParcial = new Empleado('Juan', 666, calculadoraEmpleadoTiempoParcial);
        expect(kSoft.generarBoletaDePago(empleadoPorTiempoParcial))
        .equal("BOLETA DE PAGO\nNombre: Juan\nCI: 666\nSalario: 4800\n");
    })
});
