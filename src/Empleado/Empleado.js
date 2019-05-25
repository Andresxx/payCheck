export class Empleado{

    constructor(nombre, ci, calculadoraDeSalario, calcularFechaDePago){
        this.nombre = nombre;
        this.ci = ci;
        this.calculadoraDeSalario = calculadoraDeSalario;
        this.calcularFechaDePago = calcularFechaDePago;
    }

    calcularSalario(){
        return this.calculadoraDeSalario.calcularPago();
    }
    esDiaDePago(){
        return calcularFechaDePago.esFechaDePago();
    }
}