
import {CalculadoraEmpleadoFijo} from "../CalculadoraSalario/CalculadoraEmpleadoFijo";
import {ClasificadorMensual} from "../ClasificadorFechaDePago/ClasificadorMensual";
import {Empleado} from "../Empleado/Empleado";
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
                console.log("empleado fijo");
                return empleadoFijo;
                break;
            case 'comision':
                console.log("empleado comision");
                break;
            case 'parcial':
                console.log('empleado parcial');
                break;
            default:
                console.log("No existe este empleado");
        }
    }
}