var expect = require('chai').expect;
import {FabricaEmpleados} from "../src/FabricaEmpleados/FabricaEmpleados";

describe('Pruebas de empleado', function() {

    it('Si mandamos un Json con datos de empelado Fijo, deberia retornar una instancia de empelado fijo', function(){
        let empleadoEnFormatoJson = {nombre: "Carlos Cary", ci: "8794212", tipoDeEmpleado: "fijo", metodoDePago: "Efectivo", notificacionDePago: "Efectivo"};
        let empleadoFijo = new FabricaEmpleados(empleadoEnFormatoJson);
        let instanciaDeEmpleadoFijo = empleadoFijo.obtenerInstanciaDelEmpleado();
        expect(instanciaDeEmpleadoFijo.calculadoraDeSalario.constructor.name).equal("CalculadoraEmpleadoFijo");
    });
});