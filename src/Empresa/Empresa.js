import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";
import {subirEmpleadoPromesa} from "../Firebase/Firebase";
import {subirBoletaPromesa} from "../Firebase/Firebase";

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

    generarBoletaDePagoEnJSON (empleado){
        this.boleta = new GeneradorDeBoletasDePago(empleado);
        return this.boleta.generarBoletaEnJSON();
    }

    generarBoletasDePagoParaTodosLosEmpleados() {
        let boletasDePago = [];
        this.empleados.forEach(empleado => {
            if(this.generarBoletaDePago(empleado)) {
                boletasDePago.push(this.generarBoletaDePago(empleado));
            }
        });
        return boletasDePago;
    }

    guardarUnEmpleadoEnLaBaseDeDatos(empleado) {
        subirEmpleadoPromesa(empleado);
    }

    guardarBoletaEnLaBaseDeDatos(boleta) {
        subirBoletaPromesa(boleta);
    }

    crearEmpleado(empleadoJson) {
        empleado = fabricaDeEmpleados.crearEmpleado(empleadoJson);
        guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}