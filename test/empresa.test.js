var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import {Empleado} from "../src/Empleado/Empleado";
import {CalculadoraEmpleadoFijo} from "../src/Calculadoras/CalculadoraEmpleadoFijo";
import {CalculadoraEmpleadoParcial} from "../src/Calculadoras/CalculadoraEmpleadoParcial";
import {Asistencias} from "../src/Calculadoras/Asistencias";
import {Empresa} from "../src/Empresa/Empresa";
import {subirArchivo} from "../src/Firebase/Firebase";
import {GeneradorDeBoletasDePago} from "../src/GeneradorDeBoletasDePago/GeneradorDeBoletasDePago";
describe('Pruebas de empresa y Generador de Boletas', function() {

    beforeEach(function() {
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
        let fechaActual = new Date();
        fechaActual = [fechaActual.getDate(), fechaActual.getMonth(), fechaActual.getFullYear()].join('/')
        expect(kSoft.generarBoletaDePago(empleadoFijo))
        .equal("BOLETA DE PAGO\nNombre: Harold\nCI: 420\nSalario: 4200\nFecha: " + fechaActual);
    })

    it('La empresa debe generar la boleta de pago de un empleado de tiempo parcial', function() {
        let kSoft = new Empresa();
        let tarjetasDeAsistencia = new Asistencias();
        tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(600, tarjetasDeAsistencia);
        let empleadoPorTiempoParcial = new Empleado('Juan', 666, calculadoraEmpleadoTiempoParcial);
        let fechaActual = new Date();
        fechaActual = [fechaActual.getDate(), fechaActual.getMonth(), fechaActual.getFullYear()].join('/')
        expect(kSoft.generarBoletaDePago(empleadoPorTiempoParcial))
        .equal("BOLETA DE PAGO\nNombre: Juan\nCI: 666\nSalario: 4800\nFecha: " + fechaActual);
    });

    it('Deberia poder subir una boleta de pago de un empleado a la base de datos', function() {
        let kSoft = new Empresa();
        let tarjetasDeAsistencia = new Asistencias();
        tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(900, tarjetasDeAsistencia);
        let empleadoPorTiempoParcial = new Empleado('TEST6', 9999, calculadoraEmpleadoTiempoParcial);
        let boletaEnJSON = kSoft.generarBoletaDePagoEnJSON(empleadoPorTiempoParcial);
        subirArchivo(boletaEnJSON);
    });

    it('La empresa debe generar boletas para todos los empleados que tiene', function() {
        let kSoft = new Empresa();
        let tarjetasDeAsistencia = new Asistencias();
        tarjetasDeAsistencia.agregarTarjetaDeAsistencia('08-03-2019', '08:00', '17:00', 8);
        let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(600, tarjetasDeAsistencia);
        let empleadoPorTiempoParcial = new Empleado('Juan', 666, calculadoraEmpleadoTiempoParcial);
       
        let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(4200);
        let empleadoFijo = new Empleado('Carlos', 420, calculadoraDeEmpleadoFijo);
        kSoft.agregarEmpleado(empleadoFijo);
        kSoft.agregarEmpleado(empleadoPorTiempoParcial);

        let boletasDePago = [];
        let boletaEmpleadoFijo = new GeneradorDeBoletasDePago(empleadoFijo);
        let boletaEmpleadoParcial = new GeneradorDeBoletasDePago(empleadoPorTiempoParcial);

        boletasDePago.push(boletaEmpleadoFijo.generarBoleta());
        boletasDePago.push(boletaEmpleadoParcial.generarBoleta());
        
        expect(kSoft.generarBoletasDePagoParaTodosLosEmpleados()).eql(boletasDePago);
    });
});
