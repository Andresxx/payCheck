export class Employee{

    constructor(name, ci, salaryCalculator){
        this.name = name;
        this.ci = ci;
        this.salaryCalculator = salaryCalculator;
    }

    calcularSalario(){
        return this.salaryCalculator.calcularPago();
    }
}

