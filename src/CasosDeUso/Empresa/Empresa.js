import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";
import {subirEmpleadoPromesa} from "../../FrameworksYDrivers/Firebase/Firebase";
import {subirBoletaPromesa} from "../../FrameworksYDrivers/Firebase/Firebase";
import {descargarBoletasPromesa} from "../../FrameworksYDrivers/Firebase/Firebase";
import {descargarEmpleadosPromesa} from "../../FrameworksYDrivers/Firebase/Firebase";
import {FabricaEmpleados} from "../../FabricaEmpleados/FabricaEmpleados";

export class Empresa {

    constructor(){
        this.empleados = [];
        this.listaBoletas = [];
        this.empleadosBD = null;
        this.boletasBD = null;
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

    async descargarEmpleados(){
        this.empleadosBD = await descargarEmpleadosPromesa();
        return this.empleadosBD;
    }
 

    async descargarBoletas(){
        this.boletasBD = await descargarBoletasPromesa();
        return this.boletasBD;
    }
 

    crearEmpleado(empleadoJson) {
        let fabricaEmpleados = new FabricaEmpleados(empleadoJson); 
        let empleado = fabricaEmpleados.obtenerInstanciaDelEmpleado();
        this.guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}