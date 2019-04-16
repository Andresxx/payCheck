import {Empleado} from "../src/Empleado/Empleado.js";

export class GeneradorDeBoletasDePago {

    constructor(empleado){
        this.empleado = empleado;    
    }

    generarBoleta() {
        this.boleta = "BOLETA DE PAGO\n";
        this.boleta = this.boleta + "Nombre: " + this.empleado.nombre + "\n";
        this.boleta = this.boleta + "CI: " + this.empleado.ci + "\n";
        this.boleta = this.boleta + "Salario: " + this.empleado.calcularSalario() + "\n";
        return this.boleta;
    }

    generarBoletaEnJSON(){
        let boleta = {
            nombre : this.empleado.nombre,
            ci : this.empleado.ci,
            salario : this.empleado.calcularSalario() 
        };
        return JSON.stringify(boleta);
    }
}