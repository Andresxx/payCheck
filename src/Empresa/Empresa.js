import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";

const nodemailer = require('nodemailer');

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
        //asdasdasd
    }

    crearEmpleado(empleadoJson) {
        empleado = fabricaDeEmpleados.crearEmpleado(empleadoJson);
        guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}