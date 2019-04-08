import {Empleado} from "../Empleado/Empleado.js";

export class Empresa {

    constructor(){
        this.empleados = [];
    }

    obtenerListaDeEmpleados(){
        console.log(this.empleados)
        return this.empleados;
    }

    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }

}