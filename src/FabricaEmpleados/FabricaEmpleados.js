
import {CalculadoraEmpleadoFijo} from "../CalculadoraSalario/CalculadoraEmpleadoFijo";
import {ClasificadorMensual} from "../ClasificadorFechaDePago/ClasificadorMensual";
import {Empleado} from "../Empleado/Empleado";
import {Asistencias} from "../Tarjetas/Asistencias";
import {CalculadoraEmpleadoParcial} from "../CalculadoraSalario/CalculadoraEmpleadoParcial";
import {ClasificadorSemanal} from "../ClasificadorFechaDePago/ClasificadorSemanal";
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
                console.log('empleado comision');
                break;
            default:
                console.log("No existe este empleado");
        }
    }
}