export class Empleado{

    constructor(nombre, ci, calculadoraDeSalario, calcularFechaDePago, metodoDePago){
        this.nombre = nombre;
        this.ci = ci;
        this.calculadoraDeSalario = calculadoraDeSalario;
        this.calcularFechaDePago = calcularFechaDePago;
        this.metodoDePago = metodoDePago;
    }

    calcularSalario(){
        return this.calculadoraDeSalario.calcularPago();
    }
    esDiaDePago(){
        return calcularFechaDePago.esFechaDePago();
    }

    obtenerMetodoDePago(){
        this.metodoDePago.obtenerPago();
    }
}

