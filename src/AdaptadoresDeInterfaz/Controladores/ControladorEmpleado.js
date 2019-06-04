import {Empresa} from "../../CasosDeUso/Empresa/Empresa";

export class ControladorEmpleado {
    constructor() {
        this.empresa = new Empresa();
    }

    crearEmpleado(empleado){
        this.empresa.guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }

    async descargarEmpleados() {
        let empleados = await this.empresa.descargarEmpleados();
        return empleados;
    }
}