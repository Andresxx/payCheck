import {
    Empleado
} from "../ReglasDeNegocioEmpresariales/Entidades/Empleado/Empleado.js";

import {
    CalculadoraEmpleadoParcial
} from "../ReglasDeNegocioEmpresariales/Entidades/CalculadoraSalario/CalculadoraEmpleadoParcial";
import {
    CalculadoraEmpleadoComision
} from "../ReglasDeNegocioEmpresariales/Entidades/CalculadoraSalario/CalculadoraEmpleadoComision";
import {
    CalculadoraEmpleadoFijo
} from "../ReglasDeNegocioEmpresariales/Entidades/CalculadoraSalario/CalculadoraEmpleadoFijo";

import {
    ClasificadorMensual
} from "../ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorMensual";
import {
    ClasificadorSemanal
} from "../ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorSemanal";
import {
    ClasificadorQuincenal
} from "../ReglasDeNegocioEmpresariales/Entidades/ClasificadorFechaDePago/ClasificadorQuincenal";

import {
    Ventas
} from "../ReglasDeNegocioEmpresariales/Entidades/Tarjetas/Ventas";
import {
    Asistencias
} from "../ReglasDeNegocioEmpresariales/Entidades/Tarjetas/Asistencias";

export class FabricaEmpleados {

    constructor(empleadoEnFormatoJson) {
        this.empleadoEnFormatoJson = empleadoEnFormatoJson;
    }

    obtenerInstanciaDelEmpleado() {
        switch (this.empleadoEnFormatoJson.tipoDeEmpleado) {
            case 'fijo':
                let calculadoraDeEmpleadoFijo = new CalculadoraEmpleadoFijo(this.empleadoEnFormatoJson.salario);
                let clasificadorMensual = new ClasificadorMensual();
                let empleadoFijo = new Empleado(this.empleadoEnFormatoJson.nombre,
                    this.empleadoEnFormatoJson.ci,
                    calculadoraDeEmpleadoFijo,
                    clasificadorMensual,
                    this.empleadoEnFormatoJson.metodoDePago,
                    this.empleadoEnFormatoJson.notificacionDePago);
                return empleadoFijo;
            case 'parcial':
                let tarjetasDeAsistencia = new Asistencias();
                let calculadoraEmpleadoTiempoParcial = new CalculadoraEmpleadoParcial(this.empleadoEnFormatoJson.salario, tarjetasDeAsistencia);
                let clasificadorSemanal = new ClasificadorSemanal();
                let empleadoParcial = new Empleado(this.empleadoEnFormatoJson.nombre,
                    this.empleadoEnFormatoJson.ci,
                    calculadoraEmpleadoTiempoParcial,
                    clasificadorSemanal,
                    this.empleadoEnFormatoJson.metodoDePago,
                    this.empleadoEnFormatoJson.notificacionDePago);
                return empleadoParcial;
            case 'comision':
                let ventasEmpleadoPorComision = new Ventas();
                let calculadoraEmpleadoPorComision = new CalculadoraEmpleadoComision(this.empleadoEnFormatoJson.salario,
                    this.empleadoEnFormatoJson.porcentajeDeComision, ventasEmpleadoPorComision);
                let clasificadorQuincenalClasificadorQuincenal = new ClasificadorQuincenal();
                let empleadoComision = new Empleado(this.empleadoEnFormatoJson.nombre,
                    this.empleadoEnFormatoJson.ci,
                    calculadoraEmpleadoPorComision,
                    clasificadorQuincenalClasificadorQuincenal,
                    this.empleadoEnFormatoJson.metodoDePago,
                    this.empleadoEnFormatoJson.notificacionDePago);
                return empleadoComision;
            default:
                console.log("No existe este empleado");
        }
    }
}