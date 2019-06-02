import {GeneradorDeBoletasDePago} from "../GeneradorDeBoletasDePago/GeneradorDeBoletasDePago.js";
import {FirebaseDB} from "../../FrameworksYDrivers/Firebase/Firebase"
import {FabricaEmpleados} from "../../FabricaEmpleados/FabricaEmpleados";

export class Empresa {

    constructor(){
        this.empleados = [];
        this.listaBoletas = [];
        this.empleadosBD = null;
        this.boletasBD = null;
        this.instanciaFirebase = new FirebaseDB();
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
        this.instanciaFirebase.subirEmpleadoPromesa(empleado);
    }

    guardarBoletaEnLaBaseDeDatos(boleta) {
        this.instanciaFirebase.subirBoletaPromesa(boleta);
    }

    async descargarEmpleados(){
        this.empleadosBD = await this.instanciaFirebase.descargarEmpleadosPromesa();
        return this.empleadosBD;
    }
 

    async descargarBoletas(){
        this.boletasBD = await this.instanciaFirebase.descargarBoletasPromesa();
        return this.boletasBD;
    }
 

    crearEmpleado(empleadoJson) {
        let fabricaEmpleados = new FabricaEmpleados(empleadoJson); 
        let empleado = fabricaEmpleados.obtenerInstanciaDelEmpleado();
        this.guardarUnEmpleadoEnLaBaseDeDatos(empleado);
    }
}