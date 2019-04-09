import {Empleado} from "../Empleado/Empleado.js";
import {GeneradorDeBoletasDePago} from "../../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";
export class Empresa {

    constructor(){
        this.empleados = [];
    }

    obtenerListaDeEmpleados(){
        return this.empleados;
    }

    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }

    generarBoletaDePago(empleado) {
        this.boleta = new GeneradorDeBoletasDePago(empleado);
        return this.boleta.generarBoleta();
    }
}