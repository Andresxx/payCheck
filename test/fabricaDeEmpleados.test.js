var expect = require('chai').expect;
import {FabricaEmpleados} from "../src/FabricaEmpleados/FabricaEmpleados";

describe('Pruebas de empleado', function() {

    it('Si mandamos un Json con datos de empelado Fijo, deberia retornar una instancia de empelado fijo', function(){
        let empleadoEnFormatoJson = {nombre: "Carlos Cary", ci: "8794212", tipoDeEmpleado: "fijo", 
                                    metodoDePago: "efectivo", notificacionDePago: "mail"};
        let empleadoFijo = new FabricaEmpleados(empleadoEnFormatoJson);
        let instanciaDeEmpleadoFijo = empleadoFijo.obtenerInstanciaDelEmpleado();
        expect(instanciaDeEmpleadoFijo.calculadoraDeSalario.constructor.name).equal("CalculadoraEmpleadoFijo");
    });

    it('Si mandamos un Json con datos de empelado parcial, deberia retornar una instancia de empelado parcial', function(){
        let empleadoEnFormatoJson = {nombre: "Carlos Cary", ci: "8794212", tipoDeEmpleado: "parcial", 
                                    metodoDePago: "efectivo", notificacionDePago: "mail"};
        let empleadoParcial = new FabricaEmpleados(empleadoEnFormatoJson);
        let instanciaDeEmpleadoParcial = empleadoParcial.obtenerInstanciaDelEmpleado();
        expect(instanciaDeEmpleadoParcial.calculadoraDeSalario.constructor.name).equal("CalculadoraEmpleadoParcial");
    });

    it('Si mandamos un Json con datos de empelado por comision, deberia retornar una instancia de empelado por comision', function(){
        let empleadoEnFormatoJson = {nombre: "Carlos Cary", ci: "8794212", tipoDeEmpleado: "comision", 
                                    metodoDePago: "efectivo", notificacionDePago: "mail", porcentajeDeComision: '0.5'};
        let empleadoPorComision = new FabricaEmpleados(empleadoEnFormatoJson);
        let instanciaDeEmpleadoPorComision = empleadoPorComision.obtenerInstanciaDelEmpleado();
        expect(instanciaDeEmpleadoPorComision.calculadoraDeSalario.constructor.name).equal("CalculadoraEmpleadoComision");
    });
});