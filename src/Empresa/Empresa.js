import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";
import {subirEmpleadoPromesa} from "../Firebase/Firebase";
import {subirBoletaPromesa} from "../Firebase/Firebase";
import {descargarBoletasPromesa} from "../Firebase/Firebase";
import {descargarEmpleadosPromesa} from "../Firebase/Firebase";

export class Empresa {

    constructor(){
        this.empleados = [];
        this.listaBoletas = [];
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

    descargarEmpleados(){
        descargarEmpleadosPromesa().then((empleadosDescargados) =>{
            this.empleados.length = 0;            
            this.empleados.push = empleadosDescargados;
        });
    }

    descargarBoletas(){
        descargarBoletasPromesa().then((boletasDescargadas) =>{
            this.listaBoletas.length = 0;            
            this.listaBoletas.push = boletasDescargadas;
        });
    }

    crearEmpleado(empleadoJson) {
        empleado = fabricaDeEmpleados.crearEmpleado(empleadoJson);
        guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}