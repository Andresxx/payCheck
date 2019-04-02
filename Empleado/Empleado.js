export class Empleado{

    constructor(nombre, ci, calculadoraDeSalario){
        this.nombre = nombre;
        this.ci = ci;
        this.calculadoraDeSalario = calculadoraDeSalario;
    }

    calcularSalario(){
        return this.calculadoraDeSalario.calcularPago();
    }
}

