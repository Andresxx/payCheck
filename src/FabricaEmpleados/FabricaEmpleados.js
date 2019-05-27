
import {Empleado} from "../Empleado/Empleado";

import {CalculadoraEmpleadoParcial} from "../CalculadoraSalario/CalculadoraEmpleadoParcial";
import {CalculadoraEmpleadoComision} from "../CalculadoraSalario/CalculadoraEmpleadoComision";
import {CalculadoraEmpleadoFijo} from "../CalculadoraSalario/CalculadoraEmpleadoFijo";

import {ClasificadorMensual} from "../ClasificadorFechaDePago/ClasificadorMensual";
import {ClasificadorSemanal} from "../ClasificadorFechaDePago/ClasificadorSemanal";
import {ClasificadorQuincenal} from "../ClasificadorFechaDePago/ClasificadorQuincenal";

import {Ventas} from "../Tarjetas/Ventas";
import {Asistencias} from "../Tarjetas/Asistencias";


// const CalculadoraEmpleadoFijo = require('../CalculadoraSalario/CalculadoraEmpleadoFijo.js');
export class FabricaEmpleados {

    constructor(empleadoEnFormatoJson){
        this.empleadoEnFormatoJson = empleadoEnFormatoJson;
    }

    obtenerInstanciaDelEmpleado() {
        switch(this.empleadoEnFormatoJson.tipoDeEmpleado) {
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